
<div class="row" style="background-color:white;text-align:center;padding:1em;" id="dist_row">
                  
                </div>

                <script type="text/javascript">
                    
                   
                    
                   //$('#change_dropdown_title').bind('DOMNodeInserted DOMNodeRemoved', function() { 
                        changeDist();
                   //});


                   function changeDist() {
                    if ($('#change_dropdown_title').text().indexOf('中文')>-1) {
                        $('#dist_row').show();
                        if (window.location.href.indexOf("smart_appliances_control")>-1) {
                            
                            $('#dist_row').text('哪裡買？ 聯強國際股份有限公司 | 連鎖通路: 全國電子股份有限公司 全省門市');
                        } else if (window.location.href.indexOf("auro")>-1) {
                            
                            $('#dist_row').text('哪裡買？ 先創國際股份有限公司 | 愛比堤股份有限公司');
                        } 
                    } else {
                            $('#dist_row').hide();
                        }
                    }


                </script>




<footer class="content_nopad bg_deepocean">

    <div class="container footer_1-1">
        <div class="row">
            <div class="col-sm-5">
                <img src="/images/logo.png" class="img-responsive">
                <h2>Smart Life, Smart Living</h2>
                <!--<p class="footer_descript">EQL brings you an easier and smarter lifestyle</p>-->
                <!--<p class="footer_descript">Contact Us: <a href="mailto:contact@eqltech.com">contact@eqltech.com</a></p>-->
                <ul class="snBtn">
                  <li><a href="https://www.facebook.com/eqltech/" target="_blank"><img src="/images/fb.png"></a></li>
                  <li><a href="https://www.linkedin.com/company/eql" target="_blank"><img src="/images/linkedin.png"></a></li>
                </ul>
            </div>

            



            <div class="col-sm-6 col-sm-offset-1">
                <div class="row">
                    <div class="col-md-4">
                        <h4 style="clear:both">Product</h4>
							<ul>
								<li>
									<a href="/auro_mask/">essence</a>
								</li>
								<!-- <li>
									<a href="/homie_series/">Homie</a>
								</li> -->
								<li>
									<a href="/ripple_series/">Ripple</a>
								</li>
								
								<li>
									<a href="/pc_stick/">PC Stick</a>
								</li>

								<li>
									<a href="/home_base_pc/">Home Base PC</a>
								</li>

							</ul>
                    </div>
                    <div class="col-md-4">
                        <h4>Service</h4>
                        <ul>
							<li>
                                <a href="/aboutus"> About Us</a>
                            </li>
                            <li>
                                <a href="/milestone"> Milestone</a>
                            </li>
							<li>
								<a href="/contactus"> Contact Us</a>
							</li>
							<li>
                                <a href="/beadistributor"> Be a Distributor</a>
							</li>
                        </ul>
                    </div>
                    <div class="col-md-4">

                        <!--<a href="#" target="_blank" class="btn btn-block button">Buy Now</a>-->
                    </div>
                </div>
            </div>
        </div>
        <!-- /.row -->
    </div>
    <!-- /.container -->
    <div class="copyright">
      <p>Copyright © 2016 EQL Technology Inc. All rights reserved.</p>
    </div>

</footer>


<!-- GA -->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-77728059-1', 'auto');
  ga('send', 'pageview');

</script>
<!-- GA End-->
