package com.ssafy.edu.model.challenge;


import lombok.*;

import javax.validation.Valid;
import java.util.List;

@Getter
@Setter
@Builder
@Valid
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class ChallengeJoinForm {
    List<ChallengeForm> challengeList;
    ChallengeForm selectedChallenge;
}
