/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ArrowIcon from '@material-ui/icons/ArrowForward';
import { BackstageTheme } from '@backstage/theme';
import Box from '@material-ui/core/Box';
import { Link } from '../../components/Link';

export type BottomLinkClassKey = 'root' | 'boxTitle' | 'arrow';

const useStyles = makeStyles<BackstageTheme>(
  theme => ({
    root: {
      maxWidth: 'fit-content',
      padding: theme.spacing(2, 2, 2, 2.5),
    },
    boxTitle: {
      margin: 0,
      color: theme.palette.textSubtle,
    },
    arrow: {
      color: theme.palette.textSubtle,
    },
  }),
  { name: 'BackstageBottomLink' },
);

export type BottomLinkProps = {
  link: string;
  title: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

export function BottomLink(props: BottomLinkProps) {
  const { link, title, onClick } = props;
  const classes = useStyles();

  return (
    <div>
      <Divider />
      <Link to={link} onClick={onClick} underline="none">
        <Box display="flex" alignItems="center" className={classes.root}>
          <Box className={classes.boxTitle} fontWeight="fontWeightBold" m={1}>
            <Typography>
              <strong>{title}</strong>
            </Typography>
          </Box>
          <ArrowIcon className={classes.arrow} />
        </Box>
      </Link>
    </div>
  );
}
