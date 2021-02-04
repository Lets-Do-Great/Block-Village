package com.ssafy.edu.service.answer;

import com.ssafy.edu.model.answer.Answer;
import com.ssafy.edu.model.answer.AnswerComment;
import com.ssafy.edu.model.answer.AnswerFavorite;
import com.ssafy.edu.model.answer.Request.*;
import com.ssafy.edu.model.answer.Response.AnswerCommentResponse;
import com.ssafy.edu.model.answer.Response.AnswerFavoriteResponse;
import com.ssafy.edu.model.answer.Response.AnswerPageResponse;
import com.ssafy.edu.model.answer.Response.AnswerResponse;
import com.ssafy.edu.model.answer.Response.Model.findAllCommentModel;
import com.ssafy.edu.model.answer.Response.Model.findAllModel;
import com.ssafy.edu.model.answer.Response.Model.findOneModel;
import com.ssafy.edu.model.mission.Mission;
import com.ssafy.edu.model.mission.Response.responseModel.pageModel;
import com.ssafy.edu.model.user.User;
import com.ssafy.edu.repository.UserJpaRepository;
import com.ssafy.edu.repository.answer.AnswerCommentJpaRepository;
import com.ssafy.edu.repository.answer.AnswerFavoriteJapRepository;
import com.ssafy.edu.repository.answer.AnswerJapRepository;
import com.ssafy.edu.repository.mission.MissionJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class AnswerServiceImpl implements AnswerService {

    @Autowired
    AnswerJapRepository answerJapRepository;

    @Autowired
    UserJpaRepository userJpaRepository;

    @Autowired
    MissionJpaRepository missionJpaRepository;

    @Autowired
    AnswerCommentJpaRepository answerCommentJpaRepository;

    @Autowired
    AnswerFavoriteJapRepository answerFavoriteJapRepository;

    @Override
    public ResponseEntity<AnswerPageResponse> findAll(AnswerSearchTypeRequest answerSearchTypeRequest) {
        ResponseEntity response;
        AnswerPageResponse result = new AnswerPageResponse();
        List<Object> resultObject = new ArrayList<>();
        Page<Answer> answerList = null;

        if (answerSearchTypeRequest.getKeywordType().equals("title")) {
            if (answerSearchTypeRequest.getSortType().equals("increase")) {
                answerList = answerJapRepository.findByTitleContaining(answerSearchTypeRequest.getKeyword(), PageRequest.of(answerSearchTypeRequest.getPageNum(), 3, Sort.by(answerSearchTypeRequest.getSearchType())));
            } else if (answerSearchTypeRequest.getSortType().equals("decrease")) {
                answerList = answerJapRepository.findByTitleContaining(answerSearchTypeRequest.getKeyword(), PageRequest.of(answerSearchTypeRequest.getPageNum(), 3, Sort.by(answerSearchTypeRequest.getSearchType()).descending()));
            }
        } else if (answerSearchTypeRequest.getKeywordType().equals("user")) {
            if (answerSearchTypeRequest.getSortType().equals("increase")) {
                answerList = answerJapRepository.findByUserNicknameContaining(answerSearchTypeRequest.getKeyword(), PageRequest.of(answerSearchTypeRequest.getPageNum(), 3, Sort.by(answerSearchTypeRequest.getSearchType())));
            } else if (answerSearchTypeRequest.getSortType().equals("decrease")) {
                answerList = answerJapRepository.findByUserNicknameContaining(answerSearchTypeRequest.getKeyword(), PageRequest.of(answerSearchTypeRequest.getPageNum(), 3, Sort.by(answerSearchTypeRequest.getSearchType()).descending()));
            }
        }
        List<findAllModel> findAllModelList = new ArrayList<>();
        for(Answer answer : answerList) {
            findAllModel findAllModel = new findAllModel().builder()
                    .answerId(answer.getId())
                    .missionId(answer.getMission().getId())
                    .email(answer.getUser().getEmail())
                    .title(answer.getTitle())
                    .readCnt(answer.getView())
                    .likeCnt(answer.getFavorite())
                    .commentCnt(answer.getAnswerCommentList().size())
                    .build();

            findAllModelList.add(findAllModel);
        }

        resultObject.add(findAllModelList);

        pageModel pageModel = new pageModel().builder()
                .pageisFirst(answerList.isFirst())
                .pageSize(answerList.getNumberOfElements())
                .pageNumber(answerList.getNumber())
                .pageTotalPages(answerList.getTotalPages())
                .pageTotalElements((int)answerList.getTotalElements())
                .build();

        resultObject.add(pageModel);

        result.status = true;
        result.data = resultObject;
        response = new ResponseEntity<>(result, HttpStatus.OK);
        return response;
    }

    @Override
    public ResponseEntity<AnswerResponse> findGetList(Long missionId) {
        ResponseEntity response;
        AnswerResponse result = new AnswerResponse();

        List<Answer> answerOptional = answerJapRepository.findByMissionIdOrderByUpdatedAtDesc(missionId);

        if (answerOptional.size() >= 0) {
            List<findAllModel> findAllModelList = new ArrayList<>();
            for(Answer answer : answerOptional){
                findAllModel findAllModel = new findAllModel().builder()
                        .answerId(answer.getId())
                        .missionId(answer.getMission().getId())
                        .email(answer.getUser().getEmail())
                        .title(answer.getTitle())
                        .readCnt(answer.getView())
                        .likeCnt(answer.getFavorite())
                        .commentCnt(answer.getAnswerCommentList().size())
                        .build();

                findAllModelList.add(findAllModel);
            }

            result.status = true;
            result.data = findAllModelList;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        return response;
    }

    @Override
    public ResponseEntity<AnswerResponse> findGetOne(Long missionId, Long answerId) {
        ResponseEntity response;
        AnswerResponse result = new AnswerResponse();

        Optional<Answer> answerOptional = answerJapRepository.findByIdAndMissionId(answerId, missionId);

        if (answerOptional.isPresent()) {
            answerOptional.get().setView(answerOptional.get().getView() + 1);
            Answer answerResult = answerJapRepository.save(answerOptional.get());

            findOneModel findOneModel = new findOneModel().builder()
                    .answerId(answerResult.getId())
                    .email(answerResult.getUser().getEmail())
                    .title(answerResult.getTitle())
                    .missionId(answerResult.getMission().getId())
                    .javascriptCode(answerResult.getJavascriptCode())
                    .xmlCode(answerResult.getXmlCode())
                    .content(answerResult.getContent())
                    .readCnt(answerResult.getView())
                    .likeCnt(answerResult.getFavorite())
                    .commentCnt(answerResult.getAnswerCommentList().size())
                    .build();

            result.status = true;
            result.data = findOneModel;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        return response;
    }

    @Override
    public ResponseEntity<AnswerResponse> findGetOneByUserId(String userEmail) {
        ResponseEntity response;
        AnswerResponse result = new AnswerResponse();

        Optional<User> userOptional = userJpaRepository.findByEmail(userEmail);

        if (userOptional.isPresent()) {
            List<findAllModel> findAllModelList = new ArrayList<>();
            List<Answer> answerList = answerJapRepository.findByUserEmailOrderByUpdatedAtDesc(userOptional.get().getEmail());

            for(Answer answer : answerList){
                findAllModel findAllModel = new findAllModel().builder()
                        .answerId(answer.getId())
                        .missionId(answer.getMission().getId())
                        .email(answer.getUser().getEmail())
                        .title(answer.getTitle())
                        .readCnt(answer.getView())
                        .likeCnt(answer.getFavorite())
                        .commentCnt(answer.getAnswerCommentList().size())
                        .build();
                findAllModelList.add(findAllModel);
            }

            result.status = true;
            result.data = findAllModelList;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        return response;
    }

    @Override
    public ResponseEntity<AnswerResponse> signUpAnswer(AnswerSignupRequest answerSignupRequest) {
        ResponseEntity response;
        AnswerResponse result = new AnswerResponse();

        Optional<User> userOptional = userJpaRepository.findByEmail(answerSignupRequest.getEmail());
        Optional<Mission> missionOptional = missionJpaRepository.findById(answerSignupRequest.getMissionId());

        if (userOptional.isPresent() && missionOptional.isPresent()) {
            Date now = new Date(System.currentTimeMillis());
            Answer answer = new Answer().builder()
                    .title(answerSignupRequest.getTitle())
                    .content(answerSignupRequest.getContent())
                    .xmlCode(answerSignupRequest.getXmlCode())
                    .javascriptCode(answerSignupRequest.getJavascriptCode())
                    .favorite(0)
                    .view(0)
                    .createdAt(now)
                    .updatedAt(now)
                    .user(userOptional.get())
                    .mission(missionOptional.get())
                    .build();

            Answer answerResult = answerJapRepository.save(answer);

            findOneModel findOneModel = new findOneModel().builder()
                    .answerId(answerResult.getId())
                    .email(answerResult.getUser().getEmail())
                    .title(answerResult.getTitle())
                    .missionId(answerResult.getMission().getId())
                    .javascriptCode(answerResult.getJavascriptCode())
                    .xmlCode(answerResult.getXmlCode())
                    .content(answerResult.getContent())
                    .readCnt(answerResult.getView())
                    .likeCnt(answerResult.getFavorite())
                    .commentCnt(0)
                    .build();

            result.status = true;
            result.data = findOneModel;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        return response;
    }

    @Override
    public ResponseEntity<AnswerResponse> updateAnswer(AnswerUpdateRequest answerUpdateRequest) {
        ResponseEntity response;
        AnswerResponse result = new AnswerResponse();

        Optional<Answer> answerOptional = answerJapRepository.findByIdAndUserEmail(answerUpdateRequest.getAnswerId(), answerUpdateRequest.getEmail());

        if (answerOptional.isPresent()) {
            Date now = new Date(System.currentTimeMillis());
            Answer answer = answerOptional.get();
            answer.setTitle(answerUpdateRequest.getTitle());
            answer.setContent(answerUpdateRequest.getContent());
            answer.setXmlCode(answerUpdateRequest.getXmlCode());
            answer.setJavascriptCode(answerUpdateRequest.getJavascriptCode());
            answer.setUpdatedAt(now);

            Answer answerResult = answerJapRepository.save(answer);

            findOneModel findOneModel = new findOneModel().builder()
                    .answerId(answerResult.getId())
                    .email(answerResult.getUser().getEmail())
                    .title(answerResult.getTitle())
                    .missionId(answerResult.getMission().getId())
                    .javascriptCode(answerResult.getJavascriptCode())
                    .xmlCode(answerResult.getXmlCode())
                    .content(answerResult.getContent())
                    .readCnt(answerResult.getView())
                    .likeCnt(answerResult.getFavorite())
                    .commentCnt(answerResult.getAnswerCommentList().size())
                    .build();

            result.status = true;
            result.data = findOneModel;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        return response;
    }

    @Override
    public ResponseEntity<AnswerResponse> deleteAnswer(AnswerDeleteRequest answerDeleteRequest) {
        ResponseEntity response;
        AnswerResponse result = new AnswerResponse();

        Optional<Answer> answerOptional = answerJapRepository.findByIdAndUserEmail(answerDeleteRequest.getAnswerId(), answerDeleteRequest.getEmail());

        if (answerOptional.isPresent()) {
            answerJapRepository.delete(answerOptional.get());
            result.status = true;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        return response;
    }

    @Override
    public ResponseEntity<AnswerFavoriteResponse> answerFavorite(AnswerFavoriteRequest answerFavoriteRequest) {
        ResponseEntity response;
        AnswerResponse result = new AnswerResponse();

        Optional<User> userOptional = userJpaRepository.findByEmail(answerFavoriteRequest.getEmail());
        Optional<Answer> answerOptional = answerJapRepository.findById(answerFavoriteRequest.getAnswerId());
        Optional<AnswerFavorite> answerFavoriteOptional = Optional.ofNullable(answerFavoriteJapRepository.findByUserEmailAndAnswerId(userOptional.get().getEmail(), answerOptional.get().getId()));

        if (answerFavoriteOptional.isEmpty()) {
            AnswerFavorite answerFavorite = new AnswerFavorite().builder()
                    .answer(answerOptional.get())
                    .user(userOptional.get())
                    .favorite(answerFavoriteRequest.isFavorite())
                    .build();

            answerFavoriteJapRepository.save(answerFavorite);

            List<AnswerFavorite> answerFavoriteList = answerFavoriteJapRepository.findByAnswerId(answerOptional.get().getId());
            answerOptional.get().setFavorite((int) answerFavoriteList.stream().filter(a -> a.isFavorite()).count());

            answerJapRepository.save(answerOptional.get());

            result.status = true;
            response = new ResponseEntity<>(result, HttpStatus.OK);

        } else if (answerFavoriteOptional.isPresent()) {
            AnswerFavorite answerFavorite = answerFavoriteOptional.get();
            answerFavorite.setFavorite(answerFavoriteRequest.isFavorite());

            answerFavoriteJapRepository.save(answerFavorite);

            List<AnswerFavorite> answerFavoriteList = answerFavoriteJapRepository.findByAnswerId(answerOptional.get().getId());
            answerOptional.get().setFavorite((int) answerFavoriteList.stream().filter(a -> a.isFavorite()).count());

            answerJapRepository.save(answerOptional.get());
            result.status = true;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        return response;
    }

    @Override
    public ResponseEntity<AnswerCommentResponse> answerfindGetComment(Long answerId) {
        ResponseEntity response;
        AnswerResponse result = new AnswerResponse();

        List<AnswerComment> answerCommentList = answerCommentJpaRepository.findByAnswerId(answerId);

        if (answerCommentList.size() >= 0) {
            List<findAllCommentModel> findAllCommentModelsList = new ArrayList<>();
            for(AnswerComment answerResult : answerCommentList){
                findAllCommentModel findAllCommentModel = new findAllCommentModel().builder()
                        .answerId(answerResult.getId())
                        .email(answerResult.getUser().getEmail())
                        .nickname(answerResult.getUser().getNickname())
                        .comment(answerResult.getComment())
                        .updated_at(answerResult.getUpdatedAt())
                        .build();
                findAllCommentModelsList.add(findAllCommentModel);
            }

            result.status = true;
            result.data = findAllCommentModelsList;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        return response;
    }


    @Override
    public ResponseEntity<AnswerCommentResponse> answersignUpComment(AnswerCommentSignUpRequest answerCommentSignUpRequest) {
        ResponseEntity response;
        AnswerResponse result = new AnswerResponse();

        Optional<Answer> answerOptional = answerJapRepository.findById(answerCommentSignUpRequest.getAnswerId());
        Optional<User> userOptional = userJpaRepository.findByEmail(answerCommentSignUpRequest.getEmail());

        if (answerOptional.isPresent() && userOptional.isPresent()) {
            Date now = new Date(System.currentTimeMillis());

            AnswerComment answerComment = new AnswerComment().builder()
                    .comment(answerCommentSignUpRequest.getComment())
                    .answer(answerOptional.get())
                    .user(userOptional.get())
                    .updatedAt(now)
                    .build();

            answerCommentJpaRepository.save(answerComment);

            result.status = true;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        return response;
    }

    @Override
    public ResponseEntity<AnswerCommentResponse> answerupdateComment(AnswerCommentUpdateRequest answerCommentUpdateRequest) {
        ResponseEntity response;
        AnswerResponse result = new AnswerResponse();

        Optional<AnswerComment> answerCommentOptional = Optional.ofNullable(answerCommentJpaRepository.findByIdAndUserEmail(answerCommentUpdateRequest.getCommentId(), answerCommentUpdateRequest.getEmail()));

        if (answerCommentOptional.isPresent()) {
            Date now = new Date(System.currentTimeMillis());

            AnswerComment answerComment = new AnswerComment().builder()
                    .id(answerCommentOptional.get().getId())
                    .comment(answerCommentUpdateRequest.getComment())
                    .answer(answerCommentOptional.get().getAnswer())
                    .user(answerCommentOptional.get().getUser())
                    .updatedAt(now)
                    .build();

            answerCommentJpaRepository.save(answerComment);

            result.status = true;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        return response;
    }

    @Override
    public ResponseEntity<AnswerCommentResponse> answerdeleteComment(AnswerCommentDeleteRequest answerCommentDeleteRequest) {
        ResponseEntity response;
        AnswerResponse result = new AnswerResponse();

        Optional<AnswerComment> answerCommentOptional = Optional.ofNullable(answerCommentJpaRepository.findByIdAndUserEmail(answerCommentDeleteRequest.getCommentId(), answerCommentDeleteRequest.getEmail()));

        if (answerCommentOptional.isPresent()) {
            answerCommentJpaRepository.delete(answerCommentOptional.get());
            result.status = true;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        return response;
    }
}
