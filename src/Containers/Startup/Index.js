import React, { useEffect } from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import InitStartup from '@/Store/Startup/Init'
import { useTranslation } from 'react-i18next'

const IndexStartupContainer = () => {
  const { t } = useTranslation()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(InitStartup.action())
  }, [dispatch]);

  return (
    <View>
      <ActivityIndicator size={'large'} />
      <Text>{t('welcome')}</Text>
    </View>
  )
};

export default IndexStartupContainer
