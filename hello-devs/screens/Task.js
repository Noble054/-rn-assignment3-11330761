import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { ScrollView } from "react-native";
const Task = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.task}>
      <View style={styles.search}>
        <View style={[styles.searchBoc, styles.filterLayout]}>
          <View style={[styles.searchBoc, styles.filterLayout]}>
            <View style={[styles.groupChild, styles.childBorder]} />
            <View
              style={[styles.mynauisearchParent, styles.mynauisearchLayout]}
            >
              <Image
                style={[styles.mynauisearchIcon, styles.mynauisearchLayout]}
                contentFit="cover"
                source={require("../assets/mynauisearch.png")}
              />
              <Text style={[styles.search1, styles.studyTypo]}>Search</Text>
            </View>
          </View>
        </View>
        <View style={[styles.filter, styles.filterLayout]}>
          <View style={[styles.rectangleGroup, styles.filterLayout]}>
            <View style={styles.groupItem} />
            <Image
              style={styles.bxsliderIcon}
              contentFit="cover"
              source={require("../assets/bxslider.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.groupParent}>
        <View style={styles.helloDevsParent}>
          <Text style={[styles.helloDevs, styles.studyTypo]}>Hello , Devs</Text>
          <Text style={styles.tasksToday}>14 tasks today</Text>
        </View>
        <View style={styles.profileImage}>
          <Image
            style={styles.profileImageChild}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={styles.personIcon}
            contentFit="cover"
            source={require("../assets/person.png")}
          />
        </View>
      </View>
      <Text style={[styles.categories, styles.categoriesTypo]}>Categories</Text>
      <Text style={[styles.ongoingTask, styles.categoriesTypo]}>
        Ongoing Task
      </Text>
      
      <View style={styles.categoriesCardParent}>
        <View style={[styles.categoriesCard, styles.categoriesCardLayout]}>
          <View style={[styles.categoriesCardChild, styles.childPosition]} />
          <View style={[styles.exerciseParent, styles.exerciseLayout]}>
            <Text style={[styles.exercise, styles.exerciseLayout]}>
              Exercis
            </Text>
            <Text style={[styles.tasks, styles.tasksTypo]}>11 Tasks</Text>
          </View>
          <Image
            style={[styles.youngWomanWorkingOnline, styles.youngLayout]}
            contentFit="cover"
            source={require("../assets/young-woman-working-online.png")}
          />
        </View>
        <View style={[styles.categoriesCard1, styles.categoriesCardLayout]}>
          <View style={[styles.categoriesCardChild, styles.childPosition]} />
          <View style={[styles.studyParent, styles.parentPosition]}>
            <Text style={[styles.study, styles.studyTypo]}>Study</Text>
            <Text style={styles.tasksTypo}>12 Tasks</Text>
          </View>
          <Image
            style={[styles.youngWomanWorkingAtDesk, styles.youngLayout]}
            contentFit="cover"
            source={require("../assets/young-woman-working-at-desk.png")}
          />
        </View>

      </View>
      <View style={[styles.ongoingTasksCards, styles.ongoingLayout]}>
        <View style={[styles.ongoingTasksCardsChild, styles.ongoingLayout]} />
        <View style={[styles.mobileAppDevelopmentWrapper, styles.mobileLayout]}>
          <Text style={[styles.mobileAppDevelopment, styles.mobileLayout]}>
            Car
          </Text>
        </View>
      </View>

      <View style={[styles.ongoingTasksCards, styles.ongoingLayout]}>
        <View style={[styles.ongoingTasksCardsChild, styles.ongoingLayout]} />
        <View style={[styles.mobileAppDevelopmentWrapper, styles.mobileLayout]}>
          <Text style={[styles.mobileAppDevelopment, styles.mobileLayout]}>
            Mobile App Development
          </Text>
        </View>
      </View>



      <View style={[styles.ongoingTasksCards1, styles.ongoingLayout]}>
        <View style={[styles.ongoingTasksCardsChild, styles.ongoingLayout]} />
        <View style={[styles.mobileAppDevelopmentWrapper, styles.mobileLayout]}>
          <Text style={[styles.mobileAppDevelopment, styles.mobileLayout]}>
            Web Development
          </Text>
        </View>
      </View>



      <View style={[styles.ongoingTasksCards2, styles.ongoingLayout]}>
        <View style={[styles.ongoingTasksCardsChild, styles.ongoingLayout]} />
        <View style={[styles.pushUpsParent, styles.mobileLayout]}>
          <Text style={[styles.mobileAppDevelopment, styles.mobileLayout]}>
            Cooking
          </Text>
          <Text style={[styles.tasks, styles.tasksTypo]}>Exercise</Text>
        </View>
      </View>



    </View>
</ScrollView>
  );
};


const styles = StyleSheet.create({
  filterLayout: {
    height: 48,
    position: "absolute",
  },
  childBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  mynauisearchLayout: {
    height: 24,
    position: "absolute",
  },
  studyTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
  },
  categoriesTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    left: 20,
    position: "absolute",
  },
  categoriesCardLayout: {
    width: 186,
    height: 192,
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorSnow,
    left: 0,
    top: 0,
  },
  exerciseLayout: {
    width: 59,
    position: "absolute",
  },
  tasksTypo: {
    fontFamily: FontFamily.latoRegular,
    top: 21,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    left: 0,
    position: "absolute",
  },
  youngLayout: {
    height: 132,
    width: 151,
    position: "absolute",
  },
  parentPosition: {
    left: 16,
    top: 14,
    height: 35,
  },
  ongoingLayout: {
    height: 128,
    width: 354,
    position: "absolute",
  },
  mobileLayout: {
    width: 200,
    position: "absolute",
  },
  groupChild: {
    borderColor: Color.colorSnow,
    backgroundColor: Color.colorSnow,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_sm,
    height: 48,
    width: 280,
    left: 0,
    top: 0,
    position: "absolute",
  },
  mynauisearchIcon: {
    width: 24,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  search1: {
    top: 3,
    left: 34,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    position: "absolute",
  },
  mynauisearchParent: {
    top: 12,
    left: 11,
    width: 82,
  },
  searchBoc: {
    width: 280,
    height: 48,
    left: 0,
    top: 0,
  },
  groupItem: {
    backgroundColor: "#f0522f",
    width: 50,
    borderRadius: Border.br_sm,
    height: 48,
    left: 0,
    top: 0,
    position: "absolute",
  },
  bxsliderIcon: {
    top: 7,
    left: 8,
    width: 34,
    height: 34,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleGroup: {
    width: 50,
    left: 0,
    top: 0,
  },
  filter: {
    top: 1,
    left: 303,
    width: 50,
  },
  search: {
    top: 134,
    width: 353,
    height: 49,
    left: 20,
    position: "absolute",
  },
  helloDevs: {
    fontSize: 32,
    height: 37,
    width: 170,
    left: 0,
    top: 0,
    position: "absolute",
  },
  tasksToday: {
    top: 39,
    fontWeight: "500",
    fontFamily: FontFamily.latoLight,
    width: 77,
    height: 13,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    left: 0,
    position: "absolute",
  },
  helloDevsParent: {
    height: 52,
    width: 170,
  },
  profileImageChild: {
    top: 2,
    height: 50,
    width: 50,
    left: 0,
    position: "absolute",
  },
  personIcon: {
    left: 2,
    width: 46,
    height: 45,
    top: 0,
    position: "absolute",
  },
  profileImage: {
    marginLeft: 134,
    height: 52,
    width: 50,
  },
  groupParent: {
    top: 52,
    flexDirection: "row",
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  categories: {
    top: 213,
  },
  ongoingTask: {
    top: 468,
  },
  categoriesCardChild: {
    width: 186,
    height: 192,
    position: "absolute",
  },
  exercise: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    left: 0,
    top: 0,
  },
  tasks: {
    width: 50,
  },
  exerciseParent: {
    height: 35,
    left: 16,
    top: 14,
  },
  youngWomanWorkingOnline: {
    top: 49,
    left: 21,
  },
  categoriesCard: {
    left: 0,
    top: 0,
  },
  study: {
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    left: 0,
    top: 0,
    position: "absolute",
  },
  studyParent: {
    width: 45,
    height: 35,
    position: "absolute",
  },
  youngWomanWorkingAtDesk: {
    top: 56,
    left: 25,
  },
  categoriesCard1: {
    left: 210,
    top: 0,
  },
  categoriesCardParent: {
    top: 249,
    width: 396,
    height: 192,
    left: 20,
    position: "absolute",
  },
  ongoingTasksCardsChild: {
    borderColor: Color.colorBisque,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorSnow,
    left: 0,
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
  },
  mobileAppDevelopment: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    left: 0,
    top: 0,
  },
  mobileAppDevelopmentWrapper: {
    height: 19,
    top: 46,
    width: 200,
    left: 16,
  },
  ongoingTasksCards: {
    top: 504,
    left: 20,
  },
  ongoingTasksCards1: {
    top: 644,
    left: 20,
  },
  pushUpsParent: {
    top: 46,
    width: 200,
    left: 16,
    height: 35,
  },
  ongoingTasksCards2: {
    top: 784,
    left: 20,
  },
  task: {
    borderRadius: 30,
    backgroundColor: "#f7f0e8",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Task;
