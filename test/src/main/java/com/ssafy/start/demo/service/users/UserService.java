package com.ssafy.start.demo.service.users;


import com.ssafy.start.demo.model.users.Users;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {

    List<Users> findAll();

    Users findById(Long userno);

    void deleteById(Long userno);

    Users save(Users user);

    List<Users> findByMileageBetween(int mileage1, int mileage2);

    void updateById(Long userno, Users user);
}
