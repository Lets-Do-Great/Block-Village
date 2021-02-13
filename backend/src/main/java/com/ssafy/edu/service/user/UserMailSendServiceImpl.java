package com.ssafy.edu.service.user;

import com.ssafy.edu.model.user.SignUpRequest;
import com.ssafy.edu.repository.UserJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.MailSendException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Random;

/*
* 메일 내용 바꿔주세요.
* */

@Service
public class UserMailSendServiceImpl implements UserMailSendService {

    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private UserJpaRepository userJpaRepository;

    @Override
    public void mailSendWithUserKey(SignUpRequest signUpRequest, String key) throws MailException, MessagingException{

        String email = signUpRequest.getEmailId() + "@" + signUpRequest.getEmailSite();
        String nickname = signUpRequest.getNickname();

        MimeMessage mail = javaMailSender.createMimeMessage();
        String htmlStr = "<h2>안녕하세요 블록마을입니다.</h2>"
                + "<h3>" + nickname + "님</h3>" + "<p>인증하기 버튼을 누르시면 로그인을 하실 수 있습니다. </p>"
                + "<a style=\"text-decoration:none; color:black\" href='http://i4b205.p.ssafy.io/api/users/do/email_auth?email="+ email +"&key="+key+"'>"
                    + "<div style=\"width: 1262px; height: 603px; background-image: url('http://d2wb92nul7d5ld.cloudfront.net/join.png');\">"
                    + "<br><br><br><br><div style=\"font-size: 4.8em; font-weight: bold;\"> &emsp; &emsp; &emsp;"
                    + nickname
                    + "</div>"
                + "</a>"
                + "</div>";
        try {
            mail.setSubject("[본인인증] : 블록마을에서 도착한 인증메일입니다.", "utf-8");
            mail.setText(htmlStr, "utf-8", "html");
            mail.addRecipient(MimeMessage.RecipientType.TO, new InternetAddress(email));
            javaMailSender.send(mail);
        } catch (MessagingException e) {
            e.printStackTrace();
        }

    }

    @Override
    public void sendTempPassword(String email, String key) throws MessagingException, MailException{

        MimeMessage mail = javaMailSender.createMimeMessage();
        String htmlStr = "<h2>안녕하세요 블록마을입니다!</h2><br><br>"
                + "<h3>" + email + "님</h3>" + "<p>발급된 임시 비밀번호입니다.</p>"
                + "<h1>" + key + "</h1>"
                + "(혹시 잘못 전달된 메일이라면 이 이메일을 무시하셔도 됩니다)";
        try {
            mail.setSubject("[임시 비밀번호] : 블록마을에서 도착한 임시비밀번호입니다.", "utf-8");
            mail.setText(htmlStr, "utf-8", "html");
            mail.addRecipient(MimeMessage.RecipientType.TO, new InternetAddress(email));
            javaMailSender.send(mail);
        } catch (MessagingException | MailSendException e) {
            e.printStackTrace();
        }

    }

    @Override
    public void mailSendExistUser(String email, String nickname) throws MessagingException, MailException{

        MimeMessage mail = javaMailSender.createMimeMessage();
        String htmlStr = "<h2>비밀번호 찾기 후, 로그인을 진행해주세요. 편지를 누르면 메인페이지로 이동할 수 있습니다.</h2><br /><br />"
                    + "<div style=\"width: 1262px; height: 603px; background-image: url('http://d2wb92nul7d5ld.cloudfront.net/user.png');\">"
                        + "<br><br><br><br><div style=\"font-size: 4.8em; font-weight: bold;\"> &emsp; &emsp; &emsp;"
                            + nickname
                        + "</div>"
                    + "</div>";
        try {
            mail.setSubject("[본인인증] : 블록마을에서 도착한 메일입니다.", "utf-8");
            mail.setText(htmlStr, "utf-8", "html");
            mail.addRecipient(MimeMessage.RecipientType.TO, new InternetAddress(email));
            javaMailSender.send(mail);
        } catch (MessagingException | MailSendException e) {
            e.printStackTrace();
        }

    }

    /* 난수 이용한 키 생성 */
    private boolean lowerCheck;
    private int size;

    @Override
    public String getKey(boolean lowerCheck, int size){
        this.lowerCheck = lowerCheck;
        this.size = size;
        return init();
    }

    /* 이메일 난수 만드는 메소드 */
    private String init(){

        Random ran = new Random();
        StringBuffer sb = new StringBuffer();
        int num = 0;

        do {
            num = ran.nextInt(75) + 48;
            if ((num >= 48 && num <= 57)
                    || (num >= 65 && num <= 90)
                    || (num >= 97 && num <= 122)) {
                sb.append((char) num);
            } else {
                continue;
            }
        } while (sb.length() < size);

        if (lowerCheck) {
            return sb.toString().toLowerCase();
        }
        return sb.toString();

    }




}
