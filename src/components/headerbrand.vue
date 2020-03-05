<template>
    <header class="brand-header">
        <div class="brandbar">
            <div class="container-fixed">
                <div class="brand-logo">
                    <img src="images/deutsche-telekom-logo.svg" alt="Telekom Logo">
                    <span class="sr-only">Telekom Logo</span>
                </div>
                <div class="brand-claim">
                    <img src="images/brand-claim.svg" alt="Brand Claim">
                    <span class="sr-only">Brand Claim</span>
                </div>
            </div>
        </div>
        <nav class="navbar navbar-default">
            <div class="container-fixed">
                <div class="navbar-expanded">
                    <div class="brandnavhead" data-spy="brandnav" data-target="#MainMenu">
                        <button type="button" class="btn btn-clean navbar-btn brandnav-control-up" data-close="brandnav" data-target="#MainMenu">
                            <span class="sr-only">Back</span>
                            <span class="icon icon-navigation-left"></span>
                        </button>

                        <button type="button" class="btn btn-clean navbar-btn navbar-right" data-cancel="brandnav" data-target="#MainMenu">
                            <span class="sr-only">Close Navigation</span>
                            <span class="icon icon-cancel"></span>
                        </button>

                        <label class="navbar-header-label brandnav-label">Home</label>
                    </div>
                    <div class="brandnav brandnav-lvl-1" id="MainMenu">
                        <ul class="nav">
                            <li><a href="https://open-telekom-cloud.com/de">OPEN TELEKOM CLOUD</a></li>
                            <li class="active"><a href="index.html">Startpage</a></li>
                            <li><a href="https://open-telekom-cloud.com/en/support">Help</a></li>
                            <li><a href="https://open-telekom-cloud.com/en/support">Contact</a></li>
                            <li><a class="hidden-xl hidden-l hidden-m" data-open="brandnav">Services</a>
                                <div class="brandnav">
                                    <ul class="nav">
                                        <li><a class="hidden-xl hidden-l hidden-m" v-on:click="$emit('showece')">ECE</a></li>
                                        <li><a class="hidden-xl hidden-l hidden-m" href="#">service2</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="dropdown hidden-s hidden-xs">
                                <a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul class="dropdown-menu" style="margin-top:-10px">
                                    <li><a href="#" style="font-size:18px" v-on:click="$emit('showece')">ECE</a></li>
                                    <li><a href="#" style="font-size:18px">test2</a></li>
                                </ul>
                            </li> 
                            
                        </ul>
                    </div>
                </div>
                <div class="navbar-persistent">
                    <button type="button" class="btn btn-clean navbar-btn navbar-toggle" data-open="brandnav" data-target="#MainMenu">
                        <span class="sr-only">Open Navigation</span>
                        <span class="icon icon-list-view"></span>
                    </button>
                   <!-- <ul class="nav navbar-nav navbar-nav-icons navbar-right">
                        <li><a href="#"><span class="sr-only">Search</span><span class="icon icon-search"></span></a></li>
                        <li><a href="#"><span class="sr-only">Shoppingcart</span><span class="icon icon-shopping-cart"></span></a></li>
                        <li><a href="#"><span class="sr-only">My Profile</span><span class="icon icon-my-profile"></span></a></li>
                    </ul>
                   !-->
                </div>
            </div>
        </nav>
    </header>
</template>


<script>
export default {
    name:"headerbrand" ,
    data () {
        return {
        }
    },
    methods: {
    }
}
</script>