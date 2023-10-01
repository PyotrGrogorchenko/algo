using namespace std;
#include <iostream>
#include <bits/stdc++.h>
#include <vector>

vector<int> splitToInt(string str) {
  vector<int> res;
  stringstream _str(str);
  string word;
  while (_str >> word) {
    res.push_back(stoi(word));
  }
  return res;
}

int dsu_find(int p[], int v) {
  if (p[v] == v) {
    return v;
  }
  dsu_find(p, p[v]);
}

void dsu_unite(int p[], int a, int b) {
  a = dsu_find(p, a);
  b = dsu_find(p, b);
  if (a != b) {
    p[a] = p[b];
  }
}

struct E {
  int a;
  int b;
  float d;
};

void solve(int n, vector<vector<int>>& points) {
  vector<pair<float, pair<int, int>>> g;
  for (int i = 0; i < n; ++i) {
    for (int j = i + 1; j < n; ++j) {
      if (i == j) {
        continue;
      }
      float c = sqrt(pow(abs(points[i][0] - points[j][0]), 2) + pow(abs(points[i][1] - points[j][1]), 2));
      g.push_back({c, {i, j}});
    }
  }
  
  int p[n];
  for (int i = 0; i < n; ++i) {
    p[i] = i;
  }
  
  sort(g.begin(), g.end());
  float res = 0;

  for (auto e: g) {
    if (dsu_find(p, e.second.first) != dsu_find(p, e.second.second)) {
      res += e.first;
      dsu_unite(p, e.second.first, e.second.second);
    }
  }

  cout << res << endl;
}

void input(string file) {
  string str;
  if (file != "") {
    freopen(file.c_str(), "r", stdin);
  }

  getline(cin, str);
  int n = stoi(str);
  
  vector<vector<int>> points;
  for (int i = 0; i < n; ++i) {
    getline(cin, str);
    points.push_back(splitToInt(str));
  }

  solve(n, points);
}


int main() {
  // input("tests/002.txt");
  // input("tests/001.txt");
  input("");

  return 0;
}
