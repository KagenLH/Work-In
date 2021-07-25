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
        backgroundColor: currentUrl.pathname === '/' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.35)',
        top: currentUrl.pathname === '/' ? '0' : '75px',
        zIndex: '2',
    };

    return (
        <div style={styles}>

        </div>
    )
}