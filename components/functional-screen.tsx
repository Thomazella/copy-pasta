import React, { useState, useCallback, useEffect } from "react";
import { View, Text } from "react-native";
// import { Dispatch } from "redux";

import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";

// Passed by parent component
type PublicProps = {};

// Injected by hocs or other means of prop injection
interface Props extends PublicProps {
  navigation: StackNavigationProp;
}

const Screen: WithStackNavigationOptions<React.FC<Props>> = ({
  navigation,
  ...props
}) => {
  /**
   * states
   */
  /**
   * callbacks
   */
  const handle = useCallback(() => {});
  /**
   * effects
   */
  useEffect(() => {
    // did mount
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Text style={{}}>Email</Text>
    </View>
  );
};

Screen.navigationOptions = {
  title: "Login",
};

// const mapStateToProps = ({}: {}) => ({
//   // loggingIn: auth.loggingIn,
// });

// const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch });

// export default compose(
//   graphql(
//     gql`
//       query Q {
//         status
//       }
//     `,
//     {
//       options: {
//         fetchPolicy: "network-only",
//       },
//       props: ({ data: statusQuery }) => ({ statusQuery }),
//     }
//   ),
//   connect(mapStateToProps, mapDispatchToProps)
// )(Screen as React.FC<PublicProps>);

export default Screen as React.FC<PublicProps>;
