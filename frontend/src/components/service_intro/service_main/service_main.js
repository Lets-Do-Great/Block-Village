import React from 'react';
import styles from './service_main.module.css'

const ServiceMain = () => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>

        <div className={styles.base}>
          <div className={styles.about_top}>
            <div className={styles.about_inner}>
              <strong className={styles.about_title}>블록 마을은 ?</strong>
              <p className={styles.about_dsc}>
                대전 B205조의 "블록 마을" 프로젝트는 코딩을 배우고 싶어하고 관심 있어 하는 <br/>
                아이들을 대상으로 혁신적인 교육 플랫폼을 제공하기 위해 시작된 프로젝트입니다.<br/>
                아이들이 주어진 문제를 주도적으로 해결할 수 있게 하고, 다양한 생각과 경험의 장을 제공하는 등,<br/>
                아이들의 사고력과 창의성을 증신시키기 위해 수많은 노력과 고민을 바탕으로 제작된 프로젝트입니다.<br/>
              </p>
              <a className={styles.about_link}>영상보기</a>
            </div>
            <div className={styles.end_about}></div>
          </div>
        </div>




        <div className={styles.pannel}>


          <div className={styles.title}>
            {/* <span className={styles.head}></span> */}
            {/* <span className={styles.head_binding}> */}
              <img className={styles.logo_img} src="/images/service_intro/service_intro.png" width="300" height="100"/>
               {/* 에서는
            </span> */}
            {/* <span className={styles.head_end}></span> */}
          </div>



          <div className={styles.section}>
            <img src="/images/main/main_participate_mission_image_after.png" width="317" height="219" />
            <div className={styles.content_1}>
              <span className={styles.content_1_title}>미션 깨기</span>
              <span className={styles.content_sub_title}>블록 코딩을 이용한 학습공간</span>
              <div className={styles.content_detail}>
              블록 코딩은 아이들이 이해하기 쉽게 이루어져 있으며, 간단한 블록들을 <br/>
              배치함으로써 알고리즘의 기초를 경험할 수 있는 좋은 도구입니다. <br/>
              저희 프로젝트에서는 [Blockly]라는 라이브러리를 통해 이러한 블록들을 <br/>
              효과적으로 제공합니다. 저희가 제공하는 블록들을 통해서 아이들은 쉽고<br/>
              재미있게 프로그래밍의 기초를 학습할 수 있습니다.<br/>
              </div>
            </div>
          </div>



          <div className={styles.section}>
            <div className={styles.content_box}>
              <span className={styles.content_1_title}>미션 만들기</span>
              <span className={styles.content_sub_title}>문제의식과 해결능력</span>
              <div className={styles.content_detail}>
              현재 블록 코딩은 다양한 곳에서 교육용으로 사용되고 있으며 아이들의 <br/>
              창의력과 사고력을 증진을 위해 다양한 형태로 제공되고 있습니다.<br/>
              블록 마을에서는 저희가 직접 제작한 블록들을 이용하여 미로, 그리기와 <br/>
              같은 다양한 목표를 가진 미션을 자유롭게 제작할 수 있으며<br/>
              프로그래밍의 원리를 자연스럽게 익힐 수 있습니다.<br/>
              </div>
            </div>
            <img src="/images/main/main_make_mission_image_after.png" width="317" height="219" />
          </div>



          <div className={styles.section}>
            <img src="https://playentry.org/img/assets/about/entry_1.png" width="317" height="219" />
            <div className={styles.content_1}>
              <span className={styles.content_1_title}>공유하기</span>
              <span className={styles.content_sub_title}>다양한 생각과 접근</span>
              <div className={styles.content_detail}>
              자신이 직접 겪었던 문제들이나 불편한 요소들을 주체적인 관점에서 <br/>
              바라보고 해결하는 것이 효과적인 사고력 증진의 방법이며 이를 문제 <br/>
              해결에만 집중하는 것이 아니라 다양한 사람들과 공유하는 것, 또 다양한 <br/>
              관점에서 바라보는 것이 진정한 의미의 창의적 활동이 될 것입니다.<br/>
              공유된 작품이 어떻게 구성되었는지 살펴보고 자신만의 작품을 만들어보세요!<br/>
              </div>
            </div>
          </div>



          <div className={styles.section}>
            <div className={styles.content_box}>
              <span className={styles.content_1_title}>도전! 챌린지</span>
              <span className={styles.content_sub_title}>목표와 다짐</span>
              <div className={styles.content_detail}>
              도전! 챌린지는 아이들이 스스로 다양한 목표들을 세울 수 있게 도와줍니다.<br/>
              한가지의 목표를 가진 챌린지는 일정한 기간을 통해서만 해결할 수 있으며 <br/>
              아이들에게 교육의 효과뿐만 아니라 성장하는 뿌듯함을 알려주고 <br/>
              재미를 주는 블록 마을의 가장 큰 축제가 될 것입니다.<br/>
              </div>
            </div>
            <img src="/images/main/main_challenge_image_after.png" width="317" height="219" />
          </div>



          <div className={styles.section}>
            <img src="/images/main/main_store_image_before.png" width="317" height="219" />
            <div className={styles.content_1}>
              <span className={styles.content_1_title}>블록상점</span>
              <span className={styles.content_sub_title}>동기부여와 성취감</span>
              <div className={styles.content_detail}>
              블록상점을 아이들이 미션을 해결하고 제작하기 위한 블록들을 마일리지를 <br/>
              통해 구매할 수 있는 상점입니다. 아이들은 자연스럽게 쉬운 로직의 <br/>
              블록부터 어려운 블록까지 점진적으로 접근하게 될 것이며, 도약이 아닌<br/>
              기초부터 탄탄한 프로그래밍을 학습할 수 있게 됩니다.<br/>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ServiceMain;