import ButtonComponent from "./ButtonComponent"
import LogoComponent from "./LogoComponent"

interface Props {
    navType:string
}

export default function NavigationComponent({navType}:Props) {
    if(navType === 'nav') {
        return (
            <nav className="flex justify-between">
                <LogoComponent/>
                <ButtonComponent buttonType="dark"/>
            </nav>
        )
    } else {
        return (
            <footer className="flex justify-between">
                <LogoComponent/>
                <ButtonComponent buttonType="dark"/>
            </footer>
        )
    }
    
}