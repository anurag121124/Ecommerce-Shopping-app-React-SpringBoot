package com.ecommercespring.service.ServiceImplementation;

import com.ecommercespring.config.JwtTokenProvider;
import com.ecommercespring.model.User;
import com.ecommercespring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.security.core.GrantedAuthority;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class UserServiceImplementation implements UserDetailsService {

    private UserRepository userRepository;
    private JwtTokenProvider jwtTokenProvider;

    @Autowired
    public UserServiceImplementation(UserRepository userRepository) {
        this.userRepository = userRepository;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(username);
        if (user == null) {
            throw new UsernameNotFoundException("User Not Found With Email " + username);
        }
        List<GrantedAuthority>authorities = new ArrayList<>();

        // You should create a UserDetails object with actual user data and authorities
        return new org.springframework.security.core.userdetails.User(
                user.getEmail(), // User's username
                user.getPassword(), // User's password
                authorities // List of user's authorities
        );
    }
    }

