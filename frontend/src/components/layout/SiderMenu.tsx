import { CSSProperties, useState } from 'react';
import { Button, Layout, Menu, theme } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import listmenu from './listmenu';
import { RiMenuFold2Fill, RiMenuUnfold2Fill } from 'react-icons/ri';
import Logo from '../../assets/images/logo.png';
import { useTranslation } from 'react-i18next';
import { ItemType, MenuItemType } from 'antd/es/menu/interface';
import { LiaLanguageSolid } from 'react-icons/lia';

const { Header, Sider, Content } = Layout;

export default function SiderMenu() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [lang, setLang] = useState(localStorage.getItem('language'));
  const styles = getCss(collapsed, colorBgContainer, borderRadiusLG);
  const location = useLocation();

  function translateI18n(listmenu: ItemType<MenuItemType>[]): ItemType<MenuItemType>[] {
    return listmenu.map((item: any) => ({
      ...item,
      label: t(item.label),
      children: item.children ? translateI18n(item.children) : undefined
    }));
  }

  function changeLanguage() {
    localStorage.setItem('language', lang === 'vn' ? 'en' : 'vn');
    setLang(lang === 'vn' ? 'en' : 'vn');
    i18n.changeLanguage(lang === 'vn' ? 'en' : 'vn');
  }

  function navigateRouter(path: string) {
    navigate(path);
    if (window.matchMedia('(max-width: 768px)').matches) {
      setCollapsed(!collapsed);
    }
  }

  return (
    <Layout hasSider>
      <Sider
        onClick={() => setCollapsed(!collapsed)}
        breakpoint="md"
        width="250px"
        theme="light"
        style={styles.siderCss}
        trigger={null}
        collapsible
        collapsed={collapsed}
        className={collapsed ? '' : 'collapsed'}
      >
        <div style={{ height: '100%' }} onClick={(event) => event.stopPropagation()}>
          <div style={styles.logoCss}>
            <img style={{ height: '50%' }} src={Logo} alt="logo" />
            <div style={styles.appNameCss} className="app-name">
              {t('app-name')}
            </div>
          </div>
          <Menu
            onClick={({ key }) => navigateRouter(key)}
            theme="light"
            mode="inline"
            selectedKeys={[location.pathname as string]}
            items={translateI18n(listmenu)}
          />
        </div>
      </Sider>
      <Layout style={{ transition: 'all 0.2s,background 0s', marginLeft: collapsed ? '80px' : '250px' }}>
        <Header style={styles.headerCss}>
          <Button
            type="text"
            icon={collapsed ? <RiMenuFold2Fill size={20} /> : <RiMenuUnfold2Fill size={20} />}
            onClick={() => setCollapsed(!collapsed)}
            style={styles.buttonCss}
          />
          <Button
            className="float-right"
            type="text"
            icon={<LiaLanguageSolid size={20} />}
            onClick={() => changeLanguage()}
            style={styles.buttonCss}
          />
        </Header>
        <Content style={styles.contentCss}>
          <div style={styles.contentInnerCss}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

function getCss(collapsed: boolean, colorBgContainer: string, borderRadiusLG: number) {
  const styles = {
    appNameCss: {
      marginLeft: '0.5rem',
      fontSize: '1.5rem',
      transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
      fontFamily: '"Honk", system-ui',
      whiteSpace: 'nowrap',
      opacity: collapsed ? 0 : 1,
      width: collapsed ? '0' : ''
    } as CSSProperties,
    appNameMobileCss: {
      transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
      fontFamily: '"Honk", system-ui',
      whiteSpace: 'nowrap'
    } as CSSProperties,
    logoCss: {
      height: '64px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    } as CSSProperties,
    siderCss: {
      zIndex: '1',
      borderInlineEnd: '1px solid rgba(5, 5, 5, 0.06)',
      overflow: 'auto',
      overflowX: 'hidden',
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      bottom: 0
    } as CSSProperties,
    headerCss: {
      padding: 0,
      height: '10vh',
      background: colorBgContainer
    } as CSSProperties,
    contentCss: {
      overflowY: 'auto',
      overflowX: 'hidden',
      height: '90vh'
    } as CSSProperties,
    contentInnerCss: {
      margin: '2vh',
      minHeight: '86vh',
      textAlign: 'center',
      background: colorBgContainer,
      borderRadius: borderRadiusLG
    } as CSSProperties,
    footerCss: {
      textAlign: 'center',
      height: '10vh'
    } as CSSProperties,
    buttonCss: {
      width: 64,
      height: 64
    } as CSSProperties
  };
  return styles;
}
