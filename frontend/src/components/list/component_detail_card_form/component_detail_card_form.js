import React from 'react';
import styles from './component_detail_card_form.module.css';
import * as Icon from 'react-icons/md';
import AnswerPlayground from '../answer_playground/answer_playground';
import ReactBlockly from 'react-blockly';
import Blockly from 'blockly';
import '../../blockly/all_blocks/start_blocks';
import '../../blockly/all_blocks/judgement_blocks';
import '../../blockly/all_blocks/flow_blocks';
import '../../blockly/all_blocks/calculation_blocks';
import '../../blockly/all_blocks/movement_blocks';
import '../../blockly/all_blocks/drawing_blocks';
import '../../blockly/all_blocks/function_blocks';


const ComponentDetailCardForm = ({ detail, setLike, setDisLike, 
                            userInfo, closeDetail, onModify, onDelete }) => {
    const {email, nickname, title, created_at, updated_at, favorite,
        content, difficulty, likeCnt, readCnt } = detail;

    //======props로 받아야 하는 data
    const javascriptCode = 'var x = 0;var y = 0;var move = [];var dir = 0;var dir_info = [[0, 1], [0, -1], [-1, 0], [1, 0]];move_forward(1);turn_right();move_forward(1);console.log(move);';
    const xmlCode = '<xml xmlns="https://developers.google.com/blockly/xml"><block type="start_button" id="kj?K{^0mH$$q%:d.G.8V" x="10" y="50"><next><block type="move_forward_1" id="R8kvJaioN-z*YjS#;8%^"><next><block type="turn_right" id="E)]p(uyQ5OJD.n~B0BZ%"><next><block type="move_forward_1" id="$:Ya]@Y`h$U4jk(U%Y;;"><next><block type="end_button" id="MW`QoN%RN:lV|U!m{2zk"></block></next></block></next></block></next></block></next></block></xml>';
    const startPosition = [50, 50]


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
            setDisLike();
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

    return (
        <>
            <button onClick={closeDetail}>뒤로가기</button>

            <div className={styles.title}>{ title }</div>
            <div 
                className={styles.heart}
                onClick={changeLike}>
                { favorite
                    ? <Icon.MdFavorite/>
                    : <Icon.MdFavoriteBorder/> }
            </div>

            <div>
                <Icon.MdAccountCircle/>{ nickname }
            </div>
            <div>
                <Icon.MdEdit/>{ created_at } / { updated_at }
            </div>
            <div className={styles.icon}>
                <Icon.MdAssistantPhoto/>{ difficulty }
            </div>
            <div className={styles.icon}>
                <Icon.MdFace/>{ readCnt }
            </div>
            <div className={styles.icon}>
                <Icon.MdFavorite/>{ likeCnt }
            </div>

            <div className={styles.content}>{ content }</div>

            { userInfo === email && (<>
                <button onClick={onModify}>수정하기</button>
                <button onClick={onSubmitDelete}>삭제하기</button>
            </>)}



            <div className={styles.playground}>
                <AnswerPlayground 
                    startPosition={startPosition}
                    javascript_code={javascriptCode}
                />
            </div>

            <div className={styles.workspace_cata}>
                <div className={styles.workspace}>
                    <ReactBlockly
                        toolboxCategories={toolboxCategories}
                        initialXml={xmlCode}
                        wrapperDivClassName={styles.fill_height}
                        workspaceConfiguration={{
                            grid: {
                                spacing: 20,
                                length: 2,
                                colour: '#FFDEA4',
                                snap: true,
                            },
                            move:{
                                scrollbars: true,
                                drag: true,
                                wheel: false,
                            },
                            zoom:{
                                controls: true,
                                wheel: true,
                                startScale: 1.0,
                                maxScale: 3,
                                minScale: 0.3,
                                scaleSpeed: 1.2,
                                pinch: true
                            },
                            trashcan: true,
                            renderer : "Zelos",
                            theme: theme,
                            readOnly: true,
                        }}
                        // workspaceDidChange={workspaceDidChange}
                    />
                </div>
            </div>
        </>
    );
}

export default ComponentDetailCardForm;