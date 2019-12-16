import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import {
  FormControl,
  Grid,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { DraggableCore } from 'react-draggable';
import * as PropTypes from 'prop-types';
import { map } from 'ramda';

import useStyles from './useStyles';

const DonationCard = memo(
  ({
    animation,
    insertedAt,
    handleChange,
    handleSubmit,
    quantity,
    reason,
    receiverUserId,
    setFieldValue,
    users,
  }) => {
    const classes = useStyles();

    const [dragged, setDragged] = useState(false);
    const [dragging, setDragging] = useState(false);
    const [translate, setTranslate] = useState(0);

    const style = useMemo(
      () => ({
        ...(!dragging && {
          transitionProperty: 'all',
          transitionDuration: '1s',
          transitionTimingFunction: 'ease-in-out',
        }),
        transform: `translate(0px, ${translate}px) scale(${1 - translate / 400})`,
        opacity: 1 - translate / 300,
        visibility: translate === 300 ? 'hidden' : 'visible',
      }),
      [dragging, translate],
    );

    const onDragStart = useCallback(() => {
      setDragging(true);
      setDragged(true);
    }, []);

    const onDrag = useCallback(
      (_, { deltaY }) => {
        if (!dragging) return false;

        const nextTranslate = translate + deltaY;

        if (nextTranslate >= 0 && nextTranslate < 160) setTranslate(nextTranslate);

        return true;
      },
      [dragging, translate],
    );

    const onDragStop = useCallback(() => {
      setDragging(false);
      if (translate < 150) {
        setTranslate(0);
      } else {
        const {
          current: { anim },
        } = animation;
        anim.setDirection(-1);
        anim.play();
        setTranslate(300);
      }
    }, [animation, translate]);

    const onChangeDate = useCallback(
      nextDate => {
        setFieldValue('insertedAt', nextDate.toISOString());
      },
      [setFieldValue],
    );

    const onChangeQuantity = useCallback(
      ({ target: { value } }) => {
        setFieldValue('quantity', parseInt(value, 10) || 0);
      },
      [setFieldValue],
    );

    const setAnimationScale = useCallback(
      scale => {
        const {
          current: { el },
        } = animation;
        el.style.transform = `scale(${scale})`;
      },
      [animation],
    );

    const submit = useCallback(() => {
      handleSubmit();
      setAnimationScale(0);
      setTimeout(() => {
        setAnimationScale(1);
        setTranslate(0);
      }, 1000);
    }, [handleSubmit, setAnimationScale]);

    useEffect(() => {
      const {
        current: { anim },
      } = animation;

      if (dragging && translate) {
        anim.goToAndStop(10 + translate / 2, true);
      } else if (dragged) {
        anim.setDirection(-1);
        anim.play();
      }

      if (translate === 300) {
        setTimeout(submit, 3000);
      }
    }, [animation, dragged, dragging, submit, translate]);

    return (
      <DraggableCore
        cancel=".MuiFormControl-root, .MuiPickersModal-dialogRoot"
        onStart={onDragStart}
        onDrag={onDrag}
        onStop={onDragStop}
      >
        <Grid container justify="center">
          <Grid item xs={6} component={Paper} className={classes.card} style={style}>
            <Grid container>
              <Grid item xs={1} className={classes.edge} />
              <Grid item xs={11} className={classes.body}>
                <Grid container>
                  <Grid item xs={7} component={Typography} variant="h4">
                    Parabéns
                  </Grid>
                  <Grid
                    value={insertedAt}
                    onChange={onChangeDate}
                    item
                    xs={5}
                    component={KeyboardDatePicker}
                    format="dd/MM/yyyy"
                  />
                  <Grid
                    item
                    xs={3}
                    component={Typography}
                    variant="subtitle1"
                    className={classes.formRoot}
                  >
                    Para:
                  </Grid>
                  <Grid item xs={9} component={FormControl} className={classes.formRoot}>
                    <Select
                      name="receiverUserId"
                      value={receiverUserId}
                      onChange={handleChange}
                      variant="outlined"
                      displayEmpty
                    >
                      {map(
                        ({ id, name }) => (
                          <MenuItem key={id} value={id}>
                            {name}
                          </MenuItem>
                        ),
                        users,
                      )}
                    </Select>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    component={Typography}
                    variant="subtitle1"
                    className={classes.formRoot}
                  >
                    Motivo:
                  </Grid>
                  <Grid item xs={9} component={FormControl} className={classes.formRoot}>
                    <TextField
                      name="reason"
                      value={reason}
                      onChange={handleChange}
                      className={classes.multiline}
                      variant="outlined"
                      multiline
                      rows={2}
                    />
                  </Grid>
                  <Grid item xs={9} />
                  <Grid item xs={3} component={FormControl} className={classes.formRoot}>
                    <OutlinedInput
                      value={quantity}
                      onChange={onChangeQuantity}
                      startAdornment={<InputAdornment position="start">EZȻ</InputAdornment>}
                      labelWidth={60}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DraggableCore>
    );
  },
);

DonationCard.propTypes = {
  animation: PropTypes.shape({
    current: PropTypes.shape({
      anim: PropTypes.shape({
        goToAndStop: PropTypes.func,
        play: PropTypes.func,
        setDirection: PropTypes.func,
      }),
      el: PropTypes.shape({
        style: PropTypes.shape({
          transform: PropTypes.string,
        }),
      }),
    }),
  }),
  insertedAt: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  quantity: PropTypes.number,
  reason: PropTypes.string,
  receiverUserId: PropTypes.string,
  setFieldValue: PropTypes.func,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      email: PropTypes.string,
    }),
  ),
};

DonationCard.defaultProps = {
  animation: null,
  insertedAt: '',
  handleChange: () => {},
  handleSubmit: () => {},
  quantity: 0,
  reason: '',
  receiverUserId: '',
  setFieldValue: () => {},
  users: [],
};

export default DonationCard;
