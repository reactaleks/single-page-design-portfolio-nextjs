interface Props {
    buttonType:string
}

 export default function ButtonComponent({buttonType}: Props) {

    if(buttonType === 'dark') {
        return (
            <button className="w-[176px] h-[44px] md:w-[228px] md:h-[56px] bg-black text-light-cream rounded-full font-jakarta hover:bg-galactic-blue text-[14px] font-bold md:text-[16px]">Free Consultation</button>
        )
    } else {
        return (
            <button className="w-[176px] h-[44px] md:w-[228px] md:h-[56px] bg-light-red text-light-cream rounded-full font-jakarta hover:bg-summer-yellow text-[14px] font-bold md:text-[16px]">Free Consultation</button>
        )
    }
 

   
 }