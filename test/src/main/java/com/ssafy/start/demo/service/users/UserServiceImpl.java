package com.ssafy.start.demo.service.users;


import com.ssafy.start.demo.model.users.Users;
import com.ssafy.start.demo.repository.users.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@Slf4j
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<Users> findAll() {
        List<Users> userList = new ArrayList<>();
        userRepository.findAll().forEach(e -> {
            userList.add(e);
        });
        return userList;
    }

    @Override
    public Users findById(Long userno) {
        Optional<Users> opt = userRepository.findById(userno);
        return opt.get();
    }

    @Override
    public void deleteById(Long userno) {
        userRepository.deleteById(userno);
    }

    @Override
    public Users save(Users user) {
        userRepository.save(user);
        return user;
    }

    @Override
    public List<Users> findByMileageBetween(int mileage1, int mileage2) {
        List<Users> user = userRepository.findByMileageBetween(mileage1,mileage2);
        if(user.size() > 0){
            return user;
        }else {
            return null;
        }
    }

    @Override
    public void updateById(Long userno, Users user) { //이건 뭐야 고민좀 해봐야겠음? 이해가 안됌
        Optional<Users> opt = userRepository.findById(userno);
        Users users = new Users();
        if(opt.isPresent()){
            users = opt.get();
            users.setEmail(user.getEmail());
        }
        userRepository.save(user);
    }
}
