'use client'

import React from 'react'
import MachineGunAnimation from './MachineGunAnimation'
import MusicPlayer from './MusicPlayer'

const LoadingScreen = () => {
    let text = `Tu aata hai seene mein
        Jab jab saansein bharti hoon
        Tere dil ki galiyon se
        Main har roz guzarti hoon
        Hawa ke jaise chalta hai tu
        Main ret jaisi udti hoon
        Kaun tujhe yoon pyar karega
        Jaise main karti hoon

        Haa.. Aa..ha.. aa

        Haa.. Aa..ha.. aa

        Meri nazar ka safar
        Tujhpe hi aake ruke
        Kehne ko baaki hai kya
        Kehna tha jo keh chhuke
        Meri nigahein hain teri nigahon ki
        Tujhe khabar kya bekabar
        Main tujhse hi chup chup kar
        Teri aankhein padhti hoon
        Kaun tujhe yun pyar karega
        Jaise main karti hoon

        Haa.. Aa..ha.. aa

        Haa.. Aa..ha.. aa

        Tu jo mujhe aa mila
        Sapne hue sarphire
        Haathon mein aate nahi
        Udte hain lamhein mere
        Meri hasi tujhse
        Meri khushi tujhse
        Tujhe khabar kya beqadar
        Jis din tujhko na dekhun
        Pagal pagal phirti hoon
        Kaun tujhe yoon pyaar karega
        Jaise main karti hoon

        Haa.. Aa..ha.. aa

        Haa.. Aa..ha.. aa`
    return (
        <div className='bg-[var(--black)] min-h-screen text-white font-p'>
            <MachineGunAnimation gunText={text} />
            {/* <MusicPlayer /> */}
        </div>
    )
}

export default LoadingScreen
