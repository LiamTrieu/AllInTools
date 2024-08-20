import { GoGitCompare } from 'react-icons/go';
import { CiText } from 'react-icons/ci';
import { NavMenu } from 'types';

const listmenu: NavMenu[] = [
  { key: '/', label: 'router.dasboard', icon: <GoGitCompare /> },
  {
    key: '/text-tools',
    label: 'router.text-tools',
    icon: <CiText />,
    children: [{ key: '/text-tools/compare', label: 'router.compare', icon: <GoGitCompare /> }]
  }
];

export default listmenu;
