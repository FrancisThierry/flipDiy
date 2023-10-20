//Simple footer rendered at the bottom of each page

function Footer() {
    return ( 
        <>
            <footer style={{
                 display: 'flex',
                 justifyContent: 'center',
                 textAlign: 'center',
                 backgroundColor: 'silver',
                 padding: '20px',
                 marginTop: '40px',
            }}>
            <p style={{color:"black", fontSize:"60"}}>© 2023 Sogeti agence de Nancy</p>     
    </footer>
        </>
     );
}

export default Footer;