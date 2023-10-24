package com.ecommercespring.controller;
import com.ecommercespring.Exception.UserException;
import com.ecommercespring.config.JwtTokenProvider;
import com.ecommercespring.model.User;
import com.ecommercespring.repository.UserRepository;
import com.ecommercespring.request.LoginRequest;
import com.ecommercespring.response.AuthResponse;
import com.ecommercespring.service.CustomUserDetails;
import com.ecommercespring.service.ServiceImplementation.UserServiceImplementation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/auth")
public class AuthController {
    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;
    private JwtTokenProvider jwtTokenProvider;
    private CustomUserDetails customUserDetails;


    public AuthController(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtTokenProvider jwtTokenProvider ,CustomUserDetails customUserDetails) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtTokenProvider = jwtTokenProvider;
        this.customUserDetails= customUserDetails;

    }

    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user) throws UserException {
        String email = user.getEmail();
        String password = user.getPassword();
        String firstName = user.getFirstName();
        String lastName = user.getLastName();
        User isEmailExist = userRepository.findByEmail(email);
        // Check if user with the given email already exists
        if (isEmailExist != null) {
            // System.out.println("--------- exist "+isEmailExist).getEmail());

            throw new UserException("Email Is Already Used With Another Account");
        }
        // Create new user
        User createdUser = new User();
        createdUser.setEmail(email);
        createdUser.setFirstName(firstName);
        createdUser.setLastName(lastName);
        createdUser.setPassword(passwordEncoder.encode(password));
        User savedUser = userRepository.save(createdUser);
        Authentication authentication = new UsernamePasswordAuthenticationToken(email, password);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtTokenProvider.generateToken(authentication);
        AuthResponse authResponse = new AuthResponse(token, true);
        return new ResponseEntity<AuthResponse>(authResponse, HttpStatus.OK);

    }

    @PostMapping("/signin")
    public ResponseEntity<AuthResponse> signin(@RequestBody LoginRequest loginRequest) {
        String username = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        Authentication authentication = authenticate(username, password);
        SecurityContextHolder.getContext().setAuthentication(authentication);


        String token = jwtTokenProvider.generateToken(authentication);
        AuthResponse authResponse = new AuthResponse(token, true);

        authResponse.setStatus(true);
        authResponse.setJwt(token);

        return new ResponseEntity<AuthResponse>(authResponse,HttpStatus.OK);
    }

    private Authentication authenticate(String username, String password) {
        UserDetails userDetails = customUserDetails.loadUserByUsername(username);

        System.out.println("sign in userDetails - "+userDetails);

        if (userDetails == null) {
            System.out.println("sign in userDetails - null " + userDetails);
            throw new BadCredentialsException("Invalid username or password");
        }
        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
            System.out.println("sign in userDetails - password not match " + userDetails);
            throw new BadCredentialsException("Invalid username or password");
        }
        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }
    @DeleteMapping("/delete/{userId}")
    public ResponseEntity<String> deleteUserById(@PathVariable Long userId) throws UserException {
        // Check if the user exists
        if (!userRepository.existsById(userId)) {
            throw new UserException("User not found");
        }

        // Delete the user
        userRepository.deleteById(userId);

        return new ResponseEntity<>("User deleted successfully", HttpStatus.OK);
    }
}
