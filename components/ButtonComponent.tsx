interface Props {
    buttonType:string
}

 export default function ButtonComponent({buttonType}: Props) {

    if(buttonType === 'dark') {
        return (
            <button className="w-[176px] h-[44px] bg-black text-light-cream rounded-full font-jakarta">Free Consultation</button>
        )
    } else {
        return (
            <button className="w-[176px] h-[44px] bg-light-red text-light-cream rounded-full font-jakarta">Free Consultation</button>
        )
    }
 

   
 }