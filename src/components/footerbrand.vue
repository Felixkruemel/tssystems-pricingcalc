<template>
<footer>
  <div class="container-fixed">
    <div class="row brand-footer-bar hidden-xl hidden-l hidden-m">
      <div class="col-l-3 col-m-2 col-s-12">
        <div class="brand-logo">
          <a href="#">
            <img src="images/deutsche-telekom-logo.svg" alt="Telekom Logo">
            <span class="sr-only">Telekom Logo</span>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="brand-footer-separator hidden-xl hidden-l hidden-m"></div>
  <div class="container-fixed">
    <div class="row hidden-s hidden-xs">
      <div class="col-l-12">
        <div class="brand-footer-separator">
        </div>
      </div>
    </div>
    <div class="row brand-footer-bar">
      <div class="col-l-3 col-m-2 hidden-s hidden-xs">
        <div class="brand-logo">
          <a href="#">
            <img src="images/deutsche-telekom-logo.svg" alt="Telekom Logo">
            <span class="sr-only">Telekom Logo</span>
          </a>
        </div>
      </div>
      <div class="col-m-12 hidden-xl hidden-l hidden-m text-center text-muted">
        <div class="brand-footer-bar-text">&copy; 2020 T-Systems International GmbH. All rights reserved. </div>
      </div>
      <div class="col-l-6 col-m-8 col-s-12">
        <ul class="nav brand-footer-nav brand-footer-nav-muted text-center">
          <li><a href="https://open-telekom-cloud.com/en/imprint">Imprint</a></li>
          <li><a href="https://open-telekom-cloud.com/en/support">Contact</a></li>
          <li><a href="https://open-telekom-cloud.com/en/support">FAQ</a></li>
          <li><a href="https://open-telekom-cloud.com/en/data-protection">Privacy Policy</a></li>
          <li><a href="https://open-telekom-cloud.com/en/disclaimer-of-liability">Disclaimer</a></li>
        </ul>
      </div>
      <div class="col-l-3 col-m-12 hidden-s hidden-xs text-l-right text-m-center text-muted">
        <div class="brand-footer-bar-text">&copy; 2020 T-Systems International GmbH. All rights reserved. </div>
      </div>
    </div>
  </div>
</footer>


</template>


<script>
export default {
    name:"footerbrand" ,
    props: {
        
    },
}
</script>