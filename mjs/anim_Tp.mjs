export class anim_Tp {
    constructor(elmUn, elmDeux) {
        this.elmUn = elmUn;
        this.elmDeux = elmDeux;
    }

    animation() {
        this.elmUn.classList.add('animElmUn');
        this.elmDeux.classList.add('animElmDeux');
    }
}