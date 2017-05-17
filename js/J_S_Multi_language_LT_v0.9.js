//多語系動態網頁介面配搭CSS切換程式碼
//Coding by Jerry Shih @ Quanta Computer Inc. - 2016/07/05 ver 0.9 LT
//使用時必須在HTML HEAD標籤掛入本 J_S_Multi_language_v*.*.js檔案
//主要功能1 : Multi-lang Title 根據 on_click 事件切換網頁標題
//主要功能2 : 賦予Body 語系標籤，例如 TW,ENG,JP。以便讓不同的CSS樣式來切換背景圖片、甚至文字
//主要功能3 : 使用DOM方法，更換下拉顯示介面, 須掛入JSON資源文件檔
//主要功能4 : 使用DOM方法，依照語系更改文件內的文字

// 其他功能a (HTML) : 自動偵測瀏覽器語言，更改語言預設值。




//=====程式開始======






function chg_lang(lang_index){


			//更改標題文字
      changeWebTitle(lang_index);

      //更改BODY 語系標籤
      changeCSSTag_Multi_Lang(lang_index);
      //更改Navbar文件
      changeNavBarUIWording(lang_index);
      //根據語系更改圖片
      //changeImageByLang(lang_index);


      //讀外部JSON檔案
      var xmlhttp = new XMLHttpRequest();
      var url = "mlang.txt";

      xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var myArr = JSON.parse(xmlhttp.responseText);
          console.log(myArr);
          changeAllNavBarUIWording(myArr,lang_index);
          }
      };
      xmlhttp.open("GET", url, true);
      xmlhttp.send();

		}

//主要功能1 : Multi-lang Title 根據 on_click 事件切換網頁標題
function changeWebTitle(lang_index){
      //變更多語系網頁Title
      document.getElementsByTagName("title")[0].innerHTML = Multi_Lang_Title[lang_index];
      return;


}

//主要功能2 : 賦予Body 語系標籤，例如 TW,ENG,JP。以便讓不同的CSS樣式來切換背景圖片
function changeCSSTag_Multi_Lang(lang_index){
    // jQuery 語法:
    //  $("body").removeClass("tw cn en").addClass($(this).data("資料名"));

    //純DOM語法
    document.getElementsByTagName("body")[0].className = "";
    document.getElementsByTagName("body")[0].className = Multi_Lang_Tag[lang_index];//Multi_Lang_Tag[lang_index];
    return;
}

//主要功能3 : 使用DOM方法，更換下拉&Navbar顯示介面
function changeNavBarUIWording(lang_index){

  //更改Drondown UI 語系顯示
  //document.getElementById('lang_btn_1').innerHTML = Multi_Lang_Wording[lang_index];

  document.getElementById('change_dropdown_title').innerHTML =  Multi_Lang_Wording[lang_index]+'<b class="caret"></b>';

  return;
}




//控制圖片中的語系
function changeImageByLang(lang_index){
  switch (lang_index) {
    case 0:
          document.getElementById('lang_ces').src = "images/ces_banner.png" ;
          document.getElementById('lang_ces_min').src = "images/ces_banner_min.png" ;
          console.log("image is cht");

      break;
    case 1:
        document.getElementById('lang_ces').src = "images/ces_banner_eng.png" ;
        document.getElementById('lang_ces_min').src = "images/ces_banner_eng_min.png" ;
        console.log("english image now");
      break;

    default:
      document.getElementById('lang_ces').src = "images/ces_banner.png" ;
      document.getElementById('lang_ces_min').src = "images/ces_banner_min.png" ;
      console.log("image is default cht");
      break;

  }
  return;

}











function changeAllNavBarUIWording(arr,lang_index){
  document.getElementById('lang_navabout').innerHTML = arr[lang_index].lang_navabout;
  document.getElementById('lang_navproduct').innerHTML = arr[lang_index].lang_navproduct;
  document.getElementById('lang_navripple').innerHTML = arr[lang_index].lang_navripple;
  document.getElementById('lang_roomhub').innerHTML = arr[lang_index].lang_roomhub;
  document.getElementById('lang_pm25').innerHTML = arr[lang_index].lang_pm25;
  document.getElementById('lang_navair').innerHTML = arr[lang_index].lang_navair;
  document.getElementById('lang_navpressure').innerHTML = arr[lang_index].lang_navpressure;
  document.getElementById('lang_navplug').innerHTML = arr[lang_index].lang_navplug;
  document.getElementById('lang_navlight').innerHTML = arr[lang_index].lang_navlight;
  
  document.getElementById('lang_navessence').innerHTML = arr[lang_index].lang_navessence;
  /*document.getElementById('lang_navripple').innerHTML = arr[lang_index].lang_navripple;
  document.getElementById('lang_central').innerHTML = arr[lang_index].lang_central;
  document.getElementById('lang_door').innerHTML = arr[lang_index].lang_door;
  document.getElementById('lang_light').innerHTML = arr[lang_index].lang_light;
  document.getElementById('lang_motion').innerHTML = arr[lang_index].lang_motion;
  document.getElementById('lang_plug').innerHTML = arr[lang_index].lang_plug;
  document.getElementById('lang_shock').innerHTML = arr[lang_index].lang_shock;
  document.getElementById('lang_smoke').innerHTML = arr[lang_index].lang_smoke;
  document.getElementById('lang_weather').innerHTML = arr[lang_index].lang_weather;*/
  document.getElementById('lang_navstick').innerHTML = arr[lang_index].lang_navstick;
  document.getElementById('lang_navhbpc').innerHTML = arr[lang_index].lang_navhbpc;
  document.getElementById('lang_navinformation').innerHTML = arr[lang_index].lang_navinformation;
  document.getElementById('lang_navcontact').innerHTML = arr[lang_index].lang_navcontact;
  document.getElementById('lang_navstore').innerHTML = arr[lang_index].lang_navstore;

  document.getElementById('lang_navch').innerHTML = arr[lang_index].lang_navch;
  document.getElementById('lang_naven').innerHTML = arr[lang_index].lang_naven;
  document.getElementById('lang_logo01').innerHTML = arr[lang_index].lang_logo01;
  document.getElementById('lang_logo02').innerHTML = arr[lang_index].lang_logo02;
  document.getElementById('lang_logo03').innerHTML = arr[lang_index].lang_logo03;
  document.getElementById('lang_logo04').innerHTML = arr[lang_index].lang_logo04;
  document.getElementById('lang_logo05').innerHTML = arr[lang_index].lang_logo05;
 
  document.getElementById('lang_videotitle01').innerHTML = arr[lang_index].lang_videotitle01;
  document.getElementById('lang_videotitle02').innerHTML = arr[lang_index].lang_videotitle02;
  
  document.getElementById('lang_mediatitle02').innerHTML = arr[lang_index].lang_mediatitle02;
  document.getElementById('lang_media01').innerHTML = arr[lang_index].lang_media01;
  document.getElementById('lang_mediapost01').innerHTML = arr[lang_index].lang_mediapost01;
  document.getElementById('lang_media02').innerHTML = arr[lang_index].lang_media02;
  document.getElementById('lang_mediapost02').innerHTML = arr[lang_index].lang_mediapost02;
  document.getElementById('lang_media04').innerHTML = arr[lang_index].lang_media04;
  document.getElementById('lang_mediapost04').innerHTML = arr[lang_index].lang_mediapost04;
  document.getElementById('lang_media05').innerHTML = arr[lang_index].lang_media05;
  document.getElementById('lang_mediapost05').innerHTML = arr[lang_index].lang_mediapost05;
  document.getElementById('lang_media06').innerHTML = arr[lang_index].lang_media06;
  document.getElementById('lang_mediapost06').innerHTML = arr[lang_index].lang_mediapost06;
  
  document.getElementById('lang_blogtitle01').innerHTML = arr[lang_index].lang_blogtitle01;
  document.getElementById('lang_blogtitle02').innerHTML = arr[lang_index].lang_blogtitle02;
  document.getElementById('lang_bloghub').innerHTML = arr[lang_index].lang_bloghub;
  document.getElementById('lang_blogmita').innerHTML = arr[lang_index].lang_blogmita;
  document.getElementById('lang_blog01').innerHTML = arr[lang_index].lang_blog01;
  document.getElementById('lang_btnmore01').innerHTML = arr[lang_index].lang_btnmore;
  document.getElementById('lang_blogpc').innerHTML = arr[lang_index].lang_blogpc;
  document.getElementById('lang_blogkoli').innerHTML = arr[lang_index].lang_blogkoli;
  document.getElementById('lang_blog02').innerHTML = arr[lang_index].lang_blog02;
  document.getElementById('lang_btnmore02').innerHTML = arr[lang_index].lang_btnmore;
  document.getElementById('lang_blogmask').innerHTML = arr[lang_index].lang_mediapost05;
  document.getElementById('lang_blogvoce').innerHTML = arr[lang_index].lang_media06;
  document.getElementById('lang_blog03').innerHTML = arr[lang_index].lang_mediapost06;
  document.getElementById('lang_btnmore03').innerHTML = arr[lang_index].lang_btnmore;

  return;
}





function detectUserLang(){

    var tempLang = window.navigator.userLanguage || window.navigator.language ;
    var currentBrowserLang = tempLang.toLowerCase();
    console.log(currentBrowserLang);

    switch (currentBrowserLang) {
      case "zh-tw":
            chg_lang(0);
        break;
      case "zh-cn":
            chg_lang(0);
        break;
      case "zh-hk":
            chg_lang(0);
        break;
      case "ja":
            chg_lang(2);
        break;

      default:
            chg_lang(1);
        break;
    }
}




//=====文字儲存區======
//多語系body標籤
Multi_Lang_Tag = new Array();
Multi_Lang_Tag[0]="tw";
Multi_Lang_Tag[1]="eng";
Multi_Lang_Tag[2]="jp";

//Multi_Lang_Wording 供介面顯示
Multi_Lang_Wording = new Array();
Multi_Lang_Wording[0]="TW - 繁體中文";
Multi_Lang_Wording[1]="EN - English";
Multi_Lang_Wording[2]="JP - 日本語";


//多語系網頁Title招呼語 (顯示在瀏覽TAB上)
Multi_Lang_Title= new Array();
Multi_Lang_Title[0]="歡迎來到EQL網站";
Multi_Lang_Title[1]="Welcome to EQL";
Multi_Lang_Title[2]="EQLへようこそ - PM2.5";


//=====文字儲存區 END======
