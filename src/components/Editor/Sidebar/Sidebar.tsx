import React from 'react';
import { connect } from 'react-redux';
import { clickHandler } from '../../../constants/constants';
import { saveStateToJson } from '../../../functions/functions';
import { RootState } from '../../../store/store';
import style from './Sidebar.module.css';
import SidebarItem from './SidebarItem/SidebarItem';

const Sidebar = (props: StateProps) => {

 async function saveStateToJson() {
        const fileName = "file";
        const json = JSON.stringify(props.state);
        const blob = new Blob([json], { type: 'application/json' });
        const href = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = fileName + Date() + ".json";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <nav className={style.sidebar}>
            <SidebarItem text={'New card'} onClick={clickHandler}></SidebarItem>
            <SidebarItem text={'Save card'} onClick={saveStateToJson}></SidebarItem>
            <SidebarItem text={'Template'} onClick={clickHandler}></SidebarItem>
            <SidebarItem text={'Filters'} onClick={clickHandler}></SidebarItem>
        </nav>
    );
}

type StateProps = ReturnType<typeof mapStateToProps>
// type DispatchProps = ReturnType<typeof mapDispatchToProps>
// type Props = StateProps & DispatchProps;

function mapStateToProps(state: RootState) {
    return {
        state: {
            images: state.ImgContentReducer,
            texts: state.TextContentReducer.TextArray,
            // figures: state.figuresReducer,
            backgroundColor: state.canvasReducer.backgroundColor,
            backgroundImg: state.canvasReducer.backgroundImg,
        }
    }
}

export default connect(mapStateToProps)(Sidebar);