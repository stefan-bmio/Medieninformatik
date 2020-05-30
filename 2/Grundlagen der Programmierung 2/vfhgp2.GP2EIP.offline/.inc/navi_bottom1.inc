    <!-- #################################################################################################### --> 
    <!-- ################################# INCLUDE START -> navi_bottom1.inc ################################ --> 
    <!-- #################################################################################################### --> 
    
  </div>
  <!-- end #content --> 
  <!-- INHALT ENDE --> 
  
  <!-- =========!!!=========  --> 
  <!-- Container fuer Overlay (Feedback & Bugreport) -->
  <div class="win_overlay" id="overlay">
    <div id="overlay_contentWrap">
      <div class="overlayHeadline">
      <!-- .closeSlide --> 
        <div id="close-cross-container" class="closeSlide" href="" style="">
          <span class="closeOverlay close">
            <div class="closeCross">
            </div>
          </span>
        </div>
        <!-- .closeSlide ENDE--> 
       </div>
      <iframe id="waitForURL"></iframe>
    </div>
  </div>
  <!-- end Container Overlay  --> 
  <!-- =========!!!=========  -->
  <div id = "bugreport"> </div>
  
  <!-- INHALT ENDE --> 
  <!-- FOOTER / NAVIGATION UNTEN ANFANG -->
  
  <div id="footerContainer" class="noprint">
  	<div id="anchorsToTop">
      <div style="">
        <a href="#goTop"><span class="topLinkBar center_topLink"></span>
<span class="topLinkTriangle center_topLink"></span></a>
      </div>
      <div style="">
        <a href="#goTop"><span class="topLinkBar center_topLink"></span>
<span class="topLinkTriangle center_topLink"></span></a>
      </div>
    </div>
    <!-- #navBottom --> 
    <div id="navBottom"> 
      <div class="navBottom-stripes" style="">
         <div class="navBottom-yellow-gradient" style=""></div>
         <div class="navBottom-stripes-grey" style=""></div>
      </div>
      <div class="navBottom-spacer" style="">
        <div class="navBottom-spacer-grey-bar" style=""></div>
      </div>
      <!-- #navBottomSwitch --> 
      <div id="navBottomSwitch">
        <ul>
          <li>
            <div>
              <script type="text/javascript">
                $("#navBottomSwitch").find("ul").find("li")[0].children[0].innerHTML = butPrevChap("down");
              </script>
            </div>
          </li>
          <li>
            <div>
              <script type="text/javascript">
                $("#navBottomSwitch").find("ul").find("li")[1].children[0].innerHTML = butPrevPage("down");
              </script>
            </div>
          </li>
          <li>
            <div>
              <script type="text/javascript">
                $("#navBottomSwitch").find("ul").find("li")[2].children[0].innerHTML = butNextPage("down");	
						  </script>
            </div>
          </li>
          <li>
            <div>
              <script type="text/javascript">
                $("#navBottomSwitch").find("ul").find("li")[3].children[0].innerHTML = butNextChap("down");						
              </script>
            </div>
          </li>
        </ul>
      </div>
      <!-- #navBottomSwitch ENDE--> 
      <div id="navBottomInfo">
        <span class="footertext"> 
          <script type="text/javascript">
            $(".footertext").html(" &copy; " + printMetaInformation("year") + " - " + new Date().getFullYear() + " Beuth Hochschule Berlin. All rights reserved. | Version " + printMetaInformation("version"));
          </script> 
          |<!-- Trenner ( ... | ... ) -->
          <img src="../../.inc/bugfeedback/Icon_Bugreport.gif" width="38" height="13" style="vertical-align: middle" alt="Bugreport" />
          <a href="JavaScript: toggleBugreport('bugFenster');">Fehlerhinweis</a>
        </span>
      </div>
    </div>
    <!-- #navBottom ENDE--> 	

  </div>
  <!-- end #footerContainer --> 
  
</div>
<!-- Umschliessender Container #mainContainer ENDE --> 

<!-- #################################################################################################### --> 
<!-- ################################# INCLUDE ENDE -> navi_bottom1.inc ################################ --> 
<!-- #################################################################################################### -->