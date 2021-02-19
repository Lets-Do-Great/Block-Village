import React from 'react';
import MyChallengeList from '../my_challenge_list/my_challenge_list';
import styles from './my_challenge_form.module.css';

const MyChallengeForm = ({ category, challengeList }) => {
    return (
        <div className={styles.my_challenge_form}>
            { challengeList.length === 0 
            ? <div className={styles.text}>참여한 챌린지가 없어요</div>
            : <div className={styles.my_challenge_list_form}>
                { challengeList.map(challenge => (
                    <MyChallengeList 
                        key={challenge.challengeId}
                        category={category}
                        challenge={challenge} />
                ))}
            </div>
            }
        </div>
    );
}

export default MyChallengeForm;