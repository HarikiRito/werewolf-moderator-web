import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Role } from 'src/game/model/base.model';
import MainLayout from 'src/layouts/MainLayout';

interface Props {}

const HomePage: FC<Props> = (props) => {
  const { t } = useTranslation();
  return <MainLayout>Welcome {t(`card:role.${Role.VILLAGER}.name`)}</MainLayout>;
};

export default memo(HomePage);
