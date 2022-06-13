import { defineStore } from 'pinia'

export const useNavbarStore = defineStore({
    id: 'counter',
    state: () => ({
        open: true,
        innerWidth: 0,
        isMobile: false,
    }),
    actions: {
        updateWidth() {
            this.innerWidth = window.innerWidth

            if (this.innerWidth <= 1024) {
                this.isMobile = true
            } else {
                this.isMobile = false;
            }

            if (this.innerWidth > 1024) {
                this.open = true // open navbar when resize to full
            }

            console.log("Update width", this.innerWidth, "Mobile", this.isMobile)
        },
        onMount() {
            this.updateWidth()

            if (this.innerWidth <= 1024) {
                this.open = false
            } else {
                this.open = true
            }
        },
        toggle() {
            this.open = !this.open

            if (this.innerWidth <= 1024) {
                this.isMobile = true
            } else {
                this.isMobile = false;
            }
        },
    }
})
