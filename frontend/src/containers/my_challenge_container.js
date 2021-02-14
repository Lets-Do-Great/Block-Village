import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MyChallengeForm from '../components/my_page/my_challenge/my_challenge_form/my_challenge_form';
import MyChallengeCategory from '../components/my_page/my_challenge/my_challenge_category/my_challenge_category';
import * as ChallengeAction from '../modules/challenge';
import { HSV_VALUE } from 'blockly';

const MyChallengeContainer = ({ closeModal }) => {
    const [ category, setCategory ] = useState('done');

    const userInfo = useSelector(state => state.user.userInfo);
    const challengeList = useSelector(state => state.challenge.challengeList);
    const dispatch = useDispatch();

    useEffect(() => {
        getMyChallengeList();
    }, [ category ]);

    const onChangeCategory = (e) => {
        setCategory(e.target.attributes[1].value);
    }

    // 특정 유저가 참가중인 챌린지 목록 불러오기
    const getMyChallengeList = async () => {
        try{
            dispatch(ChallengeAction.getMyChallengeList(
                        { email: userInfo.email, todo: category }));
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <>  
            <MyChallengeCategory
                category={category}
                onChangeCategory={onChangeCategory}/>
            <MyChallengeForm 
                category={category}
                closeModal={closeModal}
                challengeList={challengeList}/>
        </>);
};

export default MyChallengeContainer;