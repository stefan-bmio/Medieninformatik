<!-- ###################################################################################################### --> 
<!-- ################################### INCLUDE START -> navi_top1.inc ################################### --> 
<!-- ###################################################################################################### --> 


<!-- Anzeige der Schlagwoerter Start -->
<div id="container_buzzwords" class="noprint"></div>
<!-- Anzeige der Schlagwoerter Ende --> 

<!-- Abschnitt, um Overlib Popups zu ermoeglichen. Start -->
<div id="overDiv" style=""></div>
<script src="../../.inc/js/overlib.js" type="text/javascript"></script>
<!-- Abschnitt, um Overlib Popups zu ermoeglichen. Ende -->

<!-- Umschliessender Container #mainContainer START -->
<div id="mainContainer">
  <a id="goTop"></a> 
  
  <!-- ###################################################################################################### --> 
  <!-- NAV BAR (div-basiert, gif-los)- von Florian Krüllke November 2014/2015 --> 
  <!-- NAVIGATION OBEN START -->
  <div id="navMain" class="noprint">
    <div id="navLELogo">
      <img class="navLElogo-img" src="../../LELogo.png" alt="LE-Logo">
      <div class="navLELogo-blue-bar" style=""></div>
      <div class="navLELogo-yellow-bar" style=""></div>
    </div>
    <!-- #navLELogo ENDE -->
    <div id="navContent"> 
    	<div id="navHeadline">
      	<p id="navTitle">
        	<script type="text/javascript">
                $("#navTitle").html(printMetaInformation("module") + "<br>" + LETitle);
					</script>      
        </p>
      </div><!-- #navHeadline ENDE -->
      <!-- #navMenu -->
      <div id="navMenu">
      	<ul>
          <li>
            <a id="navButtonHomeNeu" class="navMenu-btn" href="../../.shell/lerneinheiten.shtml" style="">
              <div>
                <div id="homeSVG">
                </div>
              </div>
            </a>
          </li>
          <li><a id="navButtonInhaltNeu"  class="navMenu-btn navMenu-btn-txt" onclick="javascript:openSlide('inhalt',0)" style="">INHALT</a></li>
          <li><a id="navButtonIndexNeu"   class="navMenu-btn navMenu-btn-txt" onclick="javascript:openSlide('index',0)"   style="">INDEX</a></li>
          <!--<li><a id="navButtonGlossarNeu" class="navMenu-btn navMenu-btn-txt" onclick="javascript:openGlossar('')" style="">GLOSSAR</a></li>-->
          <li><a id="navButtonGlossarNeu" class="navMenu-btn navMenu-btn-txt" onclick="javascript:openSlide('glossar',0)" style="">GLOSSAR</a></li> 
          <li><a id="navButtonSuchenNeu"  class="navMenu-btn navMenu-btn-txt" onclick="javascript:openSlide('suchen',0)"   style="">SUCHEN</a></li><!-- 
          <li><a id="navButtonHilfeNeu"   class="navMenu-btn navMenu-btn-txt" onclick="javascript:openSlide('hilfe',0)"  style="">HILFE</a></li> -->
          <li><a id="navButtonHilfeNeu" class="navMenu-btn navMenu-btn-txt" onclick="javascript:openHilfe()" style="">HILFE</a></li>
          <li class="clearTheFloats">
            <div class="navButton-wrapper" style="">
              <div class="navButton-filler" style="">
                <div class="navMenu-blue-gradient"></div>
                <div class="navMenu-white-tri"></div>
                <div class="navMenu-grey-tri"></div>
              </div>
            </div>
         </li>
        </ul>
      </div><!-- #navMenu ENDE -->
      <!-- #navMenu untere gelbe Linie -->
      <div>
        <div class="navMenu-bottom-wrapper" style=""></div>
        <div class="navMenu-bottom-yellow-gradient" style=""></div>
      </div>
    </div><!-- #navMenu untere gelbe Linie ENDE -->
    <!-- #navContent ENDE -->
    <div class="navMenu-spacer" style="">
      <div class="navMenu-spacer-back" style="">
        <div class="navMenu-spacer-top" style=""></div>
        <div class="navMenu-spacer-grey-triangle" style=""></div>
        <div class="navMenu-spacer-white-triangle" style=""></div>
        <div class="navMenu-spacer-grey-bar" style=""></div>
      </div>
    </div>
    <!-- #navSwitch -->
    <div id="navSwitch">
      <div class="navSwitch-top" style="">
        <div class="navSwitch-bottom" style=""></div>
      </div>
      <div class="navSwitch-spacer" style="">
        <div class="navSwitch-spacer-back" style="">
          <div class="navSwitch-spacer-grey-bar" style=""></div>
        </div>
      </div>
      <!-- #navControls -->
      <div id="navControls">
        <div>
          <script type="text/javascript">
              $("#navControls")[0].children[0].innerHTML = butPrevChap("up");
					</script> 
        </div>
        <div> 
          <script type="text/javascript">
             $("#navControls")[0].children[1].innerHTML = butPrevPage("up");
  				</script> 
        </div>
        <!-- #navPageNumber -->
        <div id="navPageNumber"> 
          <!-- SEITENZAHLNAVIGATION MIT TOOLTIP START -->
          <div class="tooltip_link">
            <a>
              <span class="ZaehlerLink"> 
                <script type="text/javascript">
                  $("#navControls").find("span").text(nrActPage() + "/" + nrAllPages);
    						</script>
              </span>
            </a>
          </div>
          <!-- SEITENZAHLNAVIGATION MIT TOOLTIP ENDE --> 
          <!-- #aktuelleSeite -->
          <div id="aktuelleSeite" class="tooltip" style="">
            <div class="tooltip_header"></div>
            <div class="tooltip_content">
              <form name="navigationTooltip" onsubmit="gotoPage(); return false;">
                <label for="seitennummer">Gehe zu Seite:</label>
                <input type="text" id="seitennummer" size="3" autofocus>
                <input type="button" value="OK" onClick="gotoPage();">
              </form>
            </div>
            <div class="tooltip_footer"></div>
          </div>
          <!-- #aktuelleSeite ENDE -->
        </div>
        <!-- #navPageNumber ENDE -->
        <div> 
          <script type="text/javascript">
            $("#navControls")[0].children[3].innerHTML = butNextPage("up");
					</script> 
        </div>
        <div> 
          <script type="text/javascript">
            $("#navControls")[0].children[4].innerHTML = butNextChap("up");
          </script> 
        </div>
				<div class="clearTheFloats">&nbsp;</div>
      </div>
      <!-- #navControls ENDE --> 
    </div>
    <!-- #navSwitch ENDE -->
    <div class="clearTheFloats">&nbsp;</div>
  </div>
  <!-- NAVIGATION OBEN ENDE -->
  <!-- ###################################################################################################### -->
  
  <!-- ====== INHALT ANFANG ====== -->
  <div id="content"> 
    <!-- #################################################################################################### --> 
    <!-- ################################### INCLUDE ENDE -> navi_top1.inc ################################## --> 
    <!-- #################################################################################################### -->