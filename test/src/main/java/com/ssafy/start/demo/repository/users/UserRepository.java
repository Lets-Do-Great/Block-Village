package com.ssafy.start.demo.repository.users;



import com.ssafy.start.demo.model.users.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 *  PagingAndSortingRepository는 페이징과 정렬을 위한 기능을 제공하는데
 *  CrudRepository를 상속 받았으며 CurdRepository는
 *  Repository 인터페이스를 상속받았는데
 *  엔티티(테이블)를 다룰 수 있는 다양한 CRUD 메소드들이 구현되어 있습니다.
 *
 * Spring Data REST는 PagingAndSortingRepository 인터페이스의 구현을 자동으로 생성해줌.
 * 즉, 기본적인 CRUD는 제공되므로 구현하지 않아도댐.
 * (ex, findALl, findById, save, deleteById,count 등등)
 *
 * 아래의 findByEmail 메소드 역시 개발자가 구현을 하지 않았으며 JPA에서
 * 매소드 이름을 가지고 내부적으로 자동으로 SELECT 쿼리를 만들어 줌.
 *
 */

@Repository
public interface UserRepository extends JpaRepository<Users,Long> {
    public Users findByEmail(String email);
    public List<Users> findByMileageBetween(int mileage1, int mileage2);
}
