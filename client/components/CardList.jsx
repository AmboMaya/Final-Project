import React from "react";
import { connect } from "react-redux";

import { Container, Grid } from "semantic-ui-react";
import ActivityCard from "./ActivityCard";
import { getActivities } from "../actions/journalActions";
import BottomMenu from "./BottomMenu";

class CardList extends React.Component {
  state = {
    smiles: [
      { mood: "fa-angry" },
      { mood: "fa-frown" },
      { mood: "fa-meh" },
      { mood: "fa-smile" },
      { mood: "fa-laugh" }
    ],
    records: [
      {
        user_id: 1,
        entries: [
          {
            activity_id: 1,
            rating: "",
            log: ""
          },
          {
            activity_id: 2,
            rating: "",
            log: ""
          }
        ]
      }
    ]
  };

  addRecord = (id, record) => {
    const newRecord = this.state.records.map(rec => {
      if (rec.user_id !== id) return rec;
      return {
        ...rec,
        records: [...rec.entries, record]
      };
    });
    this.setState({ records: newRecord });
  };

  componentDidMount() {
    this.props.getActivities();
  }

  render() {
    return (
      <React.Fragment>
        <Container className="appBody">
          <Grid columns={3} doubling stackable>
            {this.props.activities.map(act => {
              return (
                <ActivityCard
                  name={act.name}
                  log={act.log}
                  key={act.id}
                  act_id={act.id}
                  user_id={this.state.records.user_id}
                  smiles={this.state.smiles}
                  addRecord={this.addRecord}
                />
              );
            })}
          </Grid>
        </Container>
        <BottomMenu />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  const activities = [...state.activities];
  return {
    activities
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getActivities: () => dispatch(getActivities())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList);
