hljs.initHighlightingOnLoad()

var app = new Vue({
    el: '#app',
    data: {
        menuVisible: false,
        menuSearchShow: false,
        headSearchShow: false,
        screenWidth: document.body.clientWidth
    },
    watch: {
        screenWidth(val) {
            // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
            if (!this.timer) {
                // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
                this.screenWidth = val
                this.timer = true
                let that = this
                setTimeout(function () {
                    // 打印screenWidth变化的值
                    console.log(that.screenWidth)
                    that.displaySearchBox()
                    that.timer = false
                }, 400)
            }
        }
    }, mounted() {
        const that = this
        that.displaySearchBox()
        window.onresize = () => {
            return (() => {
                window.screenWidth = document.body.clientWidth
                that.screenWidth = window.screenWidth
            })()
        }
    },
    methods: {
        menuClick() {
            this.menuVisible = !this.menuVisible
        },
        displaySearchBox() {
            if (this.screenWidth > 900) {
                this.headSearchShow = true
                this.menuSearchShow = false
            } else {
                this.headSearchShow = false
                this.menuSearchShow = true
            }
        }
    }
})

// console.log(themeConfig);
