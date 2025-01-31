import * as React from 'react';
import styles from './TestVonOptionalGroup.module.scss';
import { ITestVonOptionalGroupProps } from './ITestVonOptionalGroupProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ITestVonOptionalGroupState } from './ITestVonOptionalGroupState';
import OptionalGroup from './OptionalGroup/OptionalGroup';

export default class TestVonOptionalGroup extends React.Component<ITestVonOptionalGroupProps, ITestVonOptionalGroupState> {

  constructor(props: ITestVonOptionalGroupProps) {
    super(props);
    this.state = {
      mitTaeterGeschimpft: props.mitTaeterGeschimpft,
      taserEingesetzt: props.taserEingesetzt,
      nameDesOpfers: props.nameDesOpfers,
      gradDerVertzungen: props.gradDerVertzungen
    };
  }

  protected optionalComponentChanged = (fieldName: string, visible: boolean): void => {
    this.setState(
      { ...this.state, [fieldName]: visible }
    );
  }

  public render(): React.ReactElement<ITestVonOptionalGroupProps> {
    return (
      <div className={styles.testVonOptionalGroup} >
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <OptionalGroup fieldName='taserEingesetzt' label='Taser eingesetzt' visible={this.state.taserEingesetzt} visibilityChanged={this.optionalComponentChanged} >
                <label>Name des Opfers</label><input value={this.state.nameDesOpfers} />
                <br></br>
                <label>Grad der Verletzungen</label> <input value={this.state.gradDerVertzungen} />
              </OptionalGroup>
              <br></br>
              <OptionalGroup fieldName='mitTaeterGeschimpft' label='Mit Täter geschimpft' visible={this.state.mitTaeterGeschimpft} visibilityChanged={this.optionalComponentChanged} >
                <label>Name des Täters</label><input value={this.state.nameDesOpfers} />
                <br></br>
                <label>Betroffen geguckt</label> <input value={this.state.gradDerVertzungen} />
              </OptionalGroup>
            </div>
          </div>
        </div>
      </div >
    );
  }
}
