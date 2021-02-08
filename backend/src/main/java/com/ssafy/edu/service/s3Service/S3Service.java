package com.ssafy.edu.service.s3Service;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface S3Service {
    public void setS3Client();
    public String upload(MultipartFile file, String keyword) throws IOException;
}
