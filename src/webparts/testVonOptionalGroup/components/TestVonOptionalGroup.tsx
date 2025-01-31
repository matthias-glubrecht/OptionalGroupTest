// tslint:disable max-line-length
import * as React from 'react';
import styles from './TestVonOptionalGroup.module.scss';
import { gradDerVertzungenValues as gradDerVerletzungenValues, ITestVonOptionalGroupProps } from './ITestVonOptionalGroupProps';
import { ITestVonOptionalGroupState } from './ITestVonOptionalGroupState';
import OptionalGroup from './OptionalGroup/OptionalGroup';

export default class TestVonOptionalGroup extends React.Component<ITestVonOptionalGroupProps, ITestVonOptionalGroupState> {

  constructor(props: ITestVonOptionalGroupProps) {
    super(props);
    this.state = {
      mitTaeterGeschimpft: props.mitTaeterGeschimpft,
      taserEingesetzt: props.taserEingesetzt,
      nameDesOpfers: props.nameDesOpfers,
      nameDesTaeters: props.nameDesTaeters,
      gradDerVerletzungen: props.gradDerVertzungen,
      betroffenChecked: false
    };
  }

  public render(): React.ReactElement<ITestVonOptionalGroupProps> {
    return (
      <div className={styles.testVonOptionalGroup} >
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <OptionalGroup fieldName='taserEingesetzt' label='Taser eingesetzt' visible={this.state.taserEingesetzt} visibilityChanged={this.optionalComponentChanged} >
                <p>
                  <label>Name des Opfers</label>
                  <input value={this.state.nameDesOpfers} onChange={this.inputChangedHandler('nameDesOpfers')} />
                </p>
                <p>
                  <label>Grad der Verletzungen</label>
                  <select value={this.state.gradDerVerletzungen} onChange={this.inputChangedHandler('gradDerVerletzungen')}>
                    {gradDerVerletzungenValues.map((grad) => <option aria-selected={this.state.gradDerVerletzungen === 'grad'} key={grad} aria-label={grad} value={grad}>{grad}</option>)}
                  </select>
                </p>
              </OptionalGroup>
              <hr />
              <OptionalGroup fieldName='mitTaeterGeschimpft' label='Mit Täter geschimpft' visible={this.state.mitTaeterGeschimpft} visibilityChanged={this.optionalComponentChanged} >
                <p>
                  <label>Name des Täters</label>
                  <input value={this.state.nameDesTaeters} onChange={this.inputChangedHandler('nameDesTaeters')}/>
                </p>
                <p>
                  <label htmlFor='betroffenGeguckt'>Betroffen geguckt</label>
                  <input
                    type='checkbox'
                    id='betroffenGeguckt'
                    checked={this.state.betroffenChecked}
                    aria-checked={this.state.betroffenChecked}
                    aria-label='Betroffen geguckt'
                    onChange={() => this.setState({ ...this.state, betroffenChecked: !this.state.betroffenChecked })}
                  />
                </p>
              </OptionalGroup>
              <hr />
              <p>
              {this.state.taserEingesetzt &&
                <div>{`Der Taser wurde eingesetzt gegen das Opfer '${this.state.nameDesOpfers}' und die Verletzungen waren ${this.state.gradDerVerletzungen}.`}</div>
              }
              </p>
              <p>
              {this.state.mitTaeterGeschimpft &&
                <div>{`Mit dem Täter '${this.state.nameDesTaeters}' wurde geschimpft; er oder sie hat ${this.state.betroffenChecked ? '' : 'nicht'} betroffen geguckt.`}</div>
              }
              </p>
            </div>
          </div>
        </div>
      </div >
    );
  }

  protected optionalComponentChanged = (fieldName: string, visible: boolean): void => {
    this.setState(
      { ...this.state, [fieldName]: visible }
    );
  }

  protected inputChangedHandler = (fieldName: string): ((event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void) => {
    const it: TestVonOptionalGroup = this;
    return (event: React.ChangeEvent<HTMLInputElement>): void => {
      it.setState({
        ...it.state,
        [fieldName]: event.target.value
      });
    };
  }

  protected nameDesOpfersChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState(
      { ...this.state, nameDesOpfers: event.target.value }
    );
  }

}
