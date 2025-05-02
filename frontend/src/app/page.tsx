import variables from '../app/assets/scss/Home.module.scss'
import { promises as fs } from 'fs';
import Button from './utils/Button';

const ButtonProps = { name: "Sign up here!", href: "/dashboard/Register" }

export default async function Home() {
    const file = await fs.readFile(process.cwd()+ '/src/app/data/contentHome.json', 'utf8') //M Import js file with Hook.
    const content = JSON.parse(file)
    return(  
        <div className={variables.home_container}>        
            <h1 className={variables.home_title}>{content.title}</h1>
            <h2 className={variables.home_description}>{content.description}</h2>
            <p className={variables.home_content}>{content.content}</p>
            <Button {...ButtonProps}/>
        </div>
    )
}
