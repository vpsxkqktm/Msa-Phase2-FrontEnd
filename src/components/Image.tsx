import  PropTypes  from "prop-types";
import React from 'react';


interface ImageProps{
    src?: string;
    
    position?: string;
}

export const Image = ({
    src,
    position,
    ...props
}: ImageProps) => {
    return (
        <img src={src} style={{width: '50%', height: '50%'}} {...props}/>
    )
}

// const Image = ({ children, ...rest}:MyComponentProps)=> {
//     return(
//         <image className="image" {...rest}>
//             { children}
//         </image>
//     )
// }
// export default Image;