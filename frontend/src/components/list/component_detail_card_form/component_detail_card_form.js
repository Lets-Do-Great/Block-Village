import React, { useState, useEffect } from 'react';
import styles from './component_detail_card_form.module.css';
import * as Icon from 'react-icons/md';
import AnswerPlayground from '../answer_playground/answer_playground';
import '../../blockly/all_blocks/start_blocks';
import '../../blockly/all_blocks/judgement_blocks';
import '../../blockly/all_blocks/flow_blocks';
import '../../blockly/all_blocks/calculation_blocks';
import '../../blockly/all_blocks/movement_blocks';
import '../../blockly/all_blocks/drawing_blocks';
import '../../blockly/all_blocks/function_blocks';

import { IoMdArrowRoundBack } from 'react-icons/io';
import WorkspaceContainer from '../workspace_container/workspace_container';
import CommentContainer from '../../../containers/comment_container';
import { useHistory } from 'react-router-dom';


const ComponentDetailCardForm = ({ detail, setLike, setDislike, userInfo, closeDetail, onDelete, selectedId, imageUrl }) => {


    const {email, nickname, title, favorite, content, 
            commentCnt, likeCnt, readCnt, xmlCode, javascriptCode } = detail;
    const history = useHistory();
    
    const [ boolean, setBoolean ] = useState(false);

    //======props로 받아야 하는 data
    const startPosition = [detail.startPositionX, detail.startPositionY]

    const onBoolean = () => {
      setBoolean(true);
    }

    //====그 중 바꾸면 안되는 data 이거는 고정으로 둬야함
    const toolboxCategories = [];
    const theme = {
      'blockStyles' : {
        "start-blocks": {
          "colourPrimary": "#C30D23",
          "colourSecondary":"#AD7BE9",
          "colourTertiary":"#141414"
        },
  
        "judgement-blocks": {
          "colourPrimary": "#FFA31D",
            "colourSecondary":"#AD7BE9",
          "colourTertiary":"#141414"
        },
  
        "movement-blocks": {
          "colourPrimary": "#8FC31F",
          "colourSecondary":"#AD7BE9",
          "colourTertiary":"#141414"
        },
  
        "flow-blocks": {
          "colourPrimary": "#55CFFF",
          "colourSecondary":"#AD7BE9",
          "colourTertiary":"#141414"
        },
        "calculation-blocks": {
          "colourPrimary": "#1060FF",
          "colourSecondary":"#AD7BE9",
          "colourTertiary":"#141414"
        },
        "drawing-blocks": {
          "colourPrimary": "#7D10C4",
          "colourSecondary":"#AD7BE9",
          "colourTertiary":"#141414"
        },
        "function-blocks": {
          "colourPrimary": "#CC6666",
          "colourSecondary":"#AD7BE9",
          "colourTertiary":"#141414"
        },
      },
      'componentStyles' : {
        // 'workspaceBackgroundColour': '#1e1e1e',
        'toolboxBackgroundColour': '#F7C469',
        'toolboxForegroundColour': '#FFFFFF',
        'flyoutBackgroundColour': '#FFDEA4',
        'flyoutForegroundColour': '#1e1e1e',
        'flyoutOpacity': '#1e1e1e',
        'scrollbarColour': '#EFA420',
        'scrollbarOpacity': 0.5,
        // 'insertionMarkerColour': '#1e1e1e',
        // 'insertionMarkerOpacity': '#1e1e1e',
      },
      'fontStyle': {
        // "family": "Georgia, serif",
        "weight": "bold",
        "size": 12,
      }
    };
    //================================

    const changeLike = () => {
      if(favorite){
        setDislike();
      } else {
        setLike();
      }
    };

    const onSubmitDelete = () => {
        try{ 
            onDelete();
            closeDetail();
        } catch(e) {
            console.log(e);
        }
    }

    const onGoModify = () => {
      history.push('/main/mission/answer_modify')
    };

    return (
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.pannel}>

            <div className={styles.header}>
            
              <div className={styles.back_btn} onClick={closeDetail}>
                <IoMdArrowRoundBack size="18" />
                뒤로가기
              </div>
              <div className={styles.head_title}>{ title }</div>
              { 
                userInfo === email  
                && (
                  <div className={styles.header_btn_group}>
                    <div className={styles.header_btn_fix} onClick={onGoModify}>수정하기</div>
                    <div className={styles.header_btn_dele} onClick={onSubmitDelete}>삭제하기</div>
                  </div>
                )
              }
              <div className={styles.header_line}></div>

              <div className={styles.icon}>
                <Icon.MdAccountCircle/>{ nickname }
              </div>
              <div className={styles.icon}>
                  <Icon.MdChatBubbleOutline/>{ commentCnt }
              </div>
              <div className={styles.icon}>
                  <Icon.MdFace/>{ readCnt }
              </div>
              <div className={styles.icon}>
                  <Icon.MdFavorite/>{ likeCnt }
              </div>
            </div>


            <div className={styles.section}>
              <div className={styles.playground}>
                <AnswerPlayground 
                  imageUrl={imageUrl}
                  startPosition={startPosition}
                  javascript_code={javascriptCode}
                />
              </div>

              <div className={styles.workspace_cata}>
                <div className={styles.workspace}>
                  { boolean 
                    ? (<WorkspaceContainer 
                    xmlCode={xmlCode}
                    />)
                    : (<div className={styles.noWorkspace}>
                      <button className={styles.noWorkspace_btn} onClick={onBoolean}>
                        블록 보기
                      </button>
                    </div>)
                  }
                  
                </div>
              </div>

            </div>
   
            <div className={styles.footer}>
              <div className={styles.content}>{ content }</div>

            </div>

            <div 
              className={styles.heart}
              onClick={changeLike}>
              { favorite
                  ? <Icon.MdFavorite size="20" color="#a72b2b" />
                  : <Icon.MdFavoriteBorder size="20"/> }
              좋아요
            </div>
            <div className={styles.section_line}></div>


          </div>
        </div>

        <CommentContainer
          userInfo={userInfo}
          type="answer"
          selectedId={selectedId}/>
      </div>
    );
}

export default ComponentDetailCardForm;