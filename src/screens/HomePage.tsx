import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Role } from 'src/game/model/base.model';
import MainLayout from 'src/layouts/MainLayout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { Button } from '@material-ui/core';
import { countSlice } from 'src/store/slice';

interface Props {}

const HomePage: FC<Props> = (props) => {
  const { t } = useTranslation();
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return <MainLayout>Welcome {t(`card:role.${Role.VILLAGER}.name`)}</MainLayout>;
};

export default memo(HomePage);
