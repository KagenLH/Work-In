import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';

export default function SearchOverlay() {
    const show = useSelector(state => state.search.show);

    const currentUrl = useLocation();

    if(!show) {
        return null;
    }

    const styles = {
        position: 'fixed',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        backdropFilter: currentUrl.pathname === '/' ? 'blur(7px)' : 'none',
        top: currentUrl.pathname === '/' ? '0' : '75px',
        zIndex: '2',
    };

    return (
        <div style={styles}>

        </div>
    )
}