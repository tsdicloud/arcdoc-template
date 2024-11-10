
var mxgraph = require("https://raw.githubusercontent.com/jgraph/mxgraph/master/javascript/mxClient.min.js")({
    mxImageBasePath: "../../src/images",
    mxBasePath: "../../src" });


				// Creates the graph inside the given container
				var graph  = new mxgraph.mxGraph(container);
				var layout = new mxgraph.mxHierarchicalLayout(graph);


                // Load cells and layouts the graph
				graph.getModel().beginUpdate();
				try
				{
					var v1 = graph.insertVertex(parent, null, '1', 0, 0, 80, 30);
					var v2 = graph.insertVertex(parent, null, '2', 0, 0, 80, 30);
					var v3 = graph.insertVertex(parent, null, '3', 0, 0, 80, 30);
					var v4 = graph.insertVertex(parent, null, '4', 0, 0, 80, 30);
					var v5 = graph.insertVertex(parent, null, '5', 0, 0, 80, 30);
					var v6 = graph.insertVertex(parent, null, '6', 0, 0, 80, 30);
					var v7 = graph.insertVertex(parent, null, '7', 0, 0, 80, 30);
					var v8 = graph.insertVertex(parent, null, '8', 0, 0, 80, 30);
					var v9 = graph.insertVertex(parent, null, '9', 0, 0, 80, 30);

					var e1 = graph.insertEdge(parent, null, '', v1, v2);
					var e2 = graph.insertEdge(parent, null, '', v1, v3);
					var e3 = graph.insertEdge(parent, null, '', v3, v4);
					var e4 = graph.insertEdge(parent, null, '', v2, v5);
					var e5 = graph.insertEdge(parent, null, '', v1, v6);
					var e6 = graph.insertEdge(parent, null, '', v2, v3);
					var e7 = graph.insertEdge(parent, null, '', v6, v4);
					var e8 = graph.insertEdge(parent, null, '', v6, v1);
					var e9 = graph.insertEdge(parent, null, '', v6, v7);
					var e10 = graph.insertEdge(parent, null, '', v7, v8);
					var e11 = graph.insertEdge(parent, null, '', v7, v9);
					var e12 = graph.insertEdge(parent, null, '', v7, v6);
					var e13 = graph.insertEdge(parent, null, '', v7, v5);
					
					// Executes the layout
					layout.execute(parent);
				}
				finally
				{
					// Updates the display
					graph.getModel().endUpdate();
				}
