import './styles.css'

export const Card =  (props) => {
    return (
        <div className={props.shadow ? '__card-item __shadow' : '__card-item'}>
            <div className='__icon'>
                <i className={props.icon ? `${props.icon}` : 'fa fa-desktop'} aria-hidden="true"></i>
            </div>
            <div className='__content'>
                <h4 className={props.classTitle ?? props.classTitle}>{props.title}</h4>
                <p> {props.content} </p>
            </div>
        </div>
    )
}