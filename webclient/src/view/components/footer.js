import { Divider } from 'primereact/divider';

function Footer() {
    return (
        <><div className="spaceVertical"></div><div className="spaceVertical"></div>
        <Divider />
        <div className="spaceVertical"></div><div className="spaceVertical"></div>
        <footer>
            <div className='footer'>
                <p>UNHCR-Project</p>
                <p className='copyright'>2023 &copy; Group46, All rights reserved.</p>
            </div>
        </footer></>
    );
}
export default Footer;