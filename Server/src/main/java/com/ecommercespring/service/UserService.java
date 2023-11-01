package com.ecommercespring.service;

import com.ecommercespring.Exception.UserException;
import com.ecommercespring.model.User;

public interface UserService {



   public User findUserById(long user_id) throws UserException;
   
   public User finduserProfileByJwt(String jwt) throws UserException;
    
}
