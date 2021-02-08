package com.ssafy.edu.service.s3Service;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.util.IOUtils;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.PostConstruct;
import java.io.ByteArrayInputStream;
import java.io.IOException;

@Service
@NoArgsConstructor
public class S3ServiceImpl implements S3Service {

    private AmazonS3 s3Client;

    // application.properties or yml 파일에서 정보를 가져옵니다.
    @Value("${cloud.aws.credentials.accessKey}")
    private String accessKey;

    @Value("${cloud.aws.credentials.secretKey}")
    private String secretKey;

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    @Value("${cloud.aws.region.static}")
    private String region;

    // 클라우드 프론트 사용을 위한 도메인 이름 지정
    public static final String CLOUD_FRONT_DOMAIN_NAME = "d2wb92nul7d5ld.cloudfront.net";

    @PostConstruct
    public void setS3Client() {
        AWSCredentials credentials = new BasicAWSCredentials(this.accessKey, this.secretKey);

        s3Client = AmazonS3ClientBuilder.standard()
                .withCredentials(new AWSStaticCredentialsProvider(credentials))
                .withRegion(this.region)
                .build();
    }

    // 파일을 올리기 위한 메소드
    public String upload(MultipartFile file, String keyword) throws IOException {
        String fileName = file.getOriginalFilename();

        byte[] bytes = IOUtils.toByteArray(file.getInputStream());
        ObjectMetadata metadata = new ObjectMetadata();
        metadata.setContentLength(bytes.length);
        ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(bytes);

        s3Client.putObject(new PutObjectRequest(bucket, keyword +"/"+fileName, byteArrayInputStream, metadata)
                .withCannedAcl(CannedAccessControlList.PublicRead));

        return fileName;
    }
}
