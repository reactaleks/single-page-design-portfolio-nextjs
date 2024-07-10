interface Props {
    buttonType:string
}

 export default function ButtonComponent({buttonType}: Props) {

    if(buttonType === 'dark') {
        return (
            <button className="w-[176px] h-[44px] bg-black text-light-cream rounded-full font-jakarta hover:bg-galactic-blue text-[14px] font-bold">Free Consultation</button>
        )
    } else {
        return (
            <button className="w-[176px] h-[44px] bg-light-red text-light-cream rounded-full font-jakarta hover:bg-summer-yellow text-[14px] font-bold">Free Consultation</button>
        )
    }
 

   
 }