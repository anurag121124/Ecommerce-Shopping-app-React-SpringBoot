package com.ecommercespring.service.ServiceImplementation;

import com.ecommercespring.Exception.UserException;
import com.ecommercespring.config.JwtTokenProvider;
import com.ecommercespring.model.User;
import com.ecommercespring.repository.UserRepository;
import com.ecommercespring.service.UserService;
import java.util.Optional;
import org.springframework.stereotype.Service;

import org.springframework.stereotype.Service;


@Service
public class UserServiceImplementation implements UserService {

    private UserRepository userRepository;
    private JwtTokenProvider jwtTokenProvider;

    public UserServiceImplementation(UserRepository userRepository,JwtTokenProvider jwtTokenProvider) {

        this.userRepository=userRepository;
        this.jwtTokenProvider=jwtTokenProvider;

    }

    @Override
    public User findUserById(long userId) throws UserException {
        Optional<User> user=userRepository.findById(userId);

        if(user.isPresent()){
            return user.get();
        }
        throw new UserException("user not found with id "+userId);
    }

    @Override
    public User finduserProfileByJwt(String jwt) throws UserException {
        System.out.println("user service");
        String email=jwtTokenProvider.getEmailFromJwtToken(jwt);

        System.out.println("email"+email);

        User user=userRepository.findByEmail(email);



        if(user==null) {
            throw new UserException("user not exist with email "+email);
        }
        System.out.println("email user"+user.getEmail());
        return user;
    }

}
