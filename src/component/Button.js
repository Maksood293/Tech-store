import styled from 'styled-components';
export const ButtonContainer = styled.button `
text-transform:capitalize;
font-size:1.4rem;
background:transparent;
border:1px solid #04a3ff;
border-color:${props => props.cart ? 'var(--mainYellow)':'#04a3ff'};
border-radius:0.5rem;
margin:0.2rem 0.5rem 0.2rem 0;
color:${props => props.cart ? 'var(--mainYellow)':'#04a3ff'};
cursor:pointer;
transition:all 0.5s ease-in-out;
&:hover{
    background:${props => props.cart ? 'var(--mainYellow)':'#04a3ff'};
    color:var(--mainBlue);
}
&:focus{
    outline:none;
}


`
export const ButtonContainer2 = styled.button `
text-transform:capitalize;
font-size:1.4rem;
position:relative;
background:transparent;
border:1px solid var(--lightBlue);
border-radius:0.5rem;
margin:0.2rem 0.5rem 0.2rem 0;
color:var(--mainWhite);
cursor:pointer;
transition:all 0.5s ease-in-out;
&:hover{
    background:var(--lightBlue);
    color:var(--mainBlue);
}
&:focus{
    outline:none;
}


`