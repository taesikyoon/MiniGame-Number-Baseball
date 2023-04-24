# docker 사용법

### 스크립트 실행

- sh start.sh
  1. 빌드 및 실행
  2. 실행
  3. Quit
- sh stop.sh
  1.  실행중인 도커 컨테이너 중지
  2.  실행중인 도커 컨테이너 중지 및 모든 사용하지 않는 도커 이미지 삭제

app: NestJS 애플리케이션 모듈입니다. 기본적인 애플리케이션 설정, 로깅, 인증 등을 담당합니다.
game: 숫자 야구 게임 모듈입니다. 인공진행 모드와 유저 대결 모드를 담당합니다.
chat: 채팅 모듈입니다. 유저간의 채팅 기능을 담당합니다.
<mxfile host="app.diagrams.net" modified="2023-04-24T08:04:06.820Z" agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36" etag="Iqeu9Y0ii7T90XZikBFF" version="21.2.1" type="github">
  <diagram id="R2lEEEUBdFMjLlhIrx00" name="Page-1">
    <mxGraphModel dx="2074" dy="1156" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0" extFonts="Permanent Marker^https://fonts.googleapis.com/css?family=Permanent+Marker">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        <mxCell id="C-vyLk0tnHw3VtMMgP7b-1" value="" style="edgeStyle=entityRelationEdgeStyle;endArrow=ERzeroToMany;startArrow=ERone;endFill=1;startFill=0;" parent="1" source="C-vyLk0tnHw3VtMMgP7b-24" target="C-vyLk0tnHw3VtMMgP7b-6" edge="1">
          <mxGeometry width="100" height="100" relative="1" as="geometry">
            <mxPoint x="340" y="720" as="sourcePoint" />
            <mxPoint x="440" y="620" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="C-vyLk0tnHw3VtMMgP7b-12" value="" style="edgeStyle=entityRelationEdgeStyle;endArrow=ERzeroToMany;startArrow=ERone;endFill=1;startFill=0;" parent="1" source="C-vyLk0tnHw3VtMMgP7b-3" target="C-vyLk0tnHw3VtMMgP7b-17" edge="1">
          <mxGeometry width="100" height="100" relative="1" as="geometry">
            <mxPoint x="400" y="180" as="sourcePoint" />
            <mxPoint x="460" y="205" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="C-vyLk0tnHw3VtMMgP7b-2" value="Orders" style="shape=table;startSize=30;container=1;collapsible=1;childLayout=tableLayout;fixedRows=1;rowLines=0;fontStyle=1;align=center;resizeLast=1;" parent="1" vertex="1">
          <mxGeometry x="450" y="120" width="250" height="130" as="geometry" />
        </mxCell>
        <mxCell id="C-vyLk0tnHw3VtMMgP7b-3" value="" style="shape=partialRectangle;collapsible=0;dropTarget=0;pointerEvents=0;fillColor=none;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=1;" parent="C-vyLk0tnHw3VtMMgP7b-2" vertex="1">
          <mxGeometry y="30" width="250" height="30" as="geometry" />
        </mxCell>
        <mxCell id="C-vyLk0tnHw3VtMMgP7b-4" value="PK" style="shape=partialRectangle;overflow=hidden;connectable=0;fillColor=none;top=0;left=0;bottom=0;right=0;fontStyle=1;" parent="C-vyLk0tnHw3VtMMgP7b-3" vertex="1">
          <mxGeometry width="30" height="30" as="geometry" />
        </mxCell>
        <mxCell id="C-vyLk0tnHw3VtMMgP7b-5" value="order_id int NOT NULL " style="shape=partialRectangle;overflow=hidden;connectable=0;fillColor=none;top=0;left=0;bottom=0;right=0;align=left;spacingLeft=6;fontStyle=5;" parent="C-vyLk0tnHw3VtMMgP7b-3" vertex="1">
          <mxGeometry x="30" width="220" height="30" as="geometry" />
        </mxCell>
        <mxCell id="C-vyLk0tnHw3VtMMgP7b-6" value="" style="shape=partialRectangle;collapsible=0;dropTarget=0;pointerEvents=0;fillColor=none;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" parent="C-vyLk0tnHw3VtMMgP7b-2" vertex="1">
          <mxGeometry y="60" width="250" height="30" as="geometry" />
        </mxCell>
        <mxCell id="C-vyLk0tnHw3VtMMgP7b-7" value="FK1" style="shape=partialRectangle;overflow=hidden;connectable=0;fillColor=none;top=0;left=0;bottom=0;right=0;" parent="C-vyLk0tnHw3VtMMgP7b-6" vertex="1">
          <mxGeometry width="30" height="30" as="geometry" />
        </mxCell>
        <mxCell id="C-vyLk0tnHw3VtMMgP7b-8" value="customer_id int NOT NULL" style="shape=partialRectangle;overflow=hidden;connectable=0;fillColor=none;top=0;left=0;bottom=0;right=0;align=left;spacingLeft=6;" parent="C-vyLk0tnHw3VtMMgP7b-6" vertex="1">
          <mxGeometry x="30" width="220" height="30" as="geometry" />
        </mxCell>
        <mxCell id="C-vyLk0tnHw3VtMMgP7b-9" value="" style="shape=partialRectangle;collapsible=0;dropTarget=0;pointerEvents=0;fillColor=none;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" parent="C-vyLk0tnHw3VtMMgP7b-2" vertex="1">
          <mxGeometry y="90" width="250" height="30" as="geometry" />
        </mxCell>
        <mxCell id="C-vyLk0tnHw3VtMMgP7b-10" value="" style="shape=partialRectangle;overflow=hidden;connectable=0;fillColor=none;top=0;left=0;bottom=0;right=0;" parent="C-vyLk0tnHw3VtMMgP7b-9" vertex="1">
          <mxGeometry width="30" height="30" as="geometry" />
        </mxCell>
        <mxCell id="C-vyLk0tnHw3VtMMgP7b-11" value="order_date date NOT NULL" style="shape=partialRectangle;overflow=hidden;connectable=0;fillColor=none;top=0;left=0;bottom=0;right=0;align=left;spacingLeft=6;" parent="C-vyLk0tnHw3VtMMgP7b-9" vertex="1">
          <mxGeometry x="30" width="220" height="30" as="geometry" />
        </mxCell>
        <mxCell id="C-vyLk0tnHw3VtMMgP7b-13" value="Shipments" style="shape=table;startSize=30;container=1;collapsible=1;childLayout=tableLayout;fixedRows=1;rowLines=0;fontStyle=1;align=center;resizeLast=1;" parent="1" vertex="1">
          <mxGeometry x="450" y="280" width="250" height="130" as="geometry" />
        </mxCell>
        <mxCell id="C-vyLk0tnHw3VtMMgP7b-14" value="" style="shape=partialRectangle;collapsible=0;dropTarget=0;pointerEvents=0;fillColor=none;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=1;" parent="C-vyLk0tnHw3VtMMgP7b-13" vertex="1">
          <mxGeometry y="30" width="250" height="30" as="geometry" />
        </mxCell>
        <mxCell id="C-vyLk0tnHw3VtMMgP7b-15" value="PK" style="shape=partialRectangle;overflow=hidden;connectable=0;fillColor=none;top=0;left=0;bottom=0;right=0;fontStyle=1;" parent="C-vyLk0tnHw3VtMMgP7b-14" vertex="1">
          <mxGeometry width="30" height="30" as="geometry" />
        </mxCell>
        <mxCell id="C-vyLk0tnHw3VtMMgP7b-16" value="shipment_id int NOT NULL " style="shape=partialRectangle;overflow=hidden;connectable=0;fillColor=none;top=0;left=0;bottom=0;right=0;align=left;spacingLeft=6;fontStyle=5;" parent="C-vyLk0tnHw3VtMMgP7b-14" vertex="1">
          <mxGeometry x="30" width="220" height="30" as="geometry" />
        </mxCell>
        <mxCell id="C-vyLk0tnHw3VtMMgP7b-17" value="" style="shape=partialRectangle;collapsible=0;dropTarget=0;pointerEvents=0;fillColor=none;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" parent="C-vyLk0tnHw3VtMMgP7b-13" vertex="1">
          <mxGeometry y="60" width="250" height="30" as="geometry" />
        </mxCell>
        <mxCell id="C-vyLk0tnHw3VtMMgP7b-18" value="FK1" style="shape=partialRectangle;overflow=hidden;connectable=0;fillColor=none;top=0;left=0;bottom=0;right=0;" parent="C-vyLk0tnHw3VtMMgP7b-17" vertex="1">
          <mxGeometry width="30" height="30" as="geometry" />
        </mxCell>
        <mxCell id="C-vyLk0tnHw3VtMMgP7b-19" value="order_id int NOT NULL" style="shape=partialRectangle;overflow=hidden;connectable=0;fillColor=none;top=0;left=0;bottom=0;right=0;align=left;spacingLeft=6;" parent="C-vyLk0tnHw3VtMMgP7b-17" vertex="1">
          <mxGeometry x="30" width="220" height="30" as="geometry" />
        </mxCell>
        <mxCell id="C-vyLk0tnHw3VtMMgP7b-20" value="" style="shape=partialRectangle;collapsible=0;dropTarget=0;pointerEvents=0;fillColor=none;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" parent="C-vyLk0tnHw3VtMMgP7b-13" vertex="1">
          <mxGeometry y="90" width="250" height="30" as="geometry" />
        </mxCell>
        <mxCell id="C-vyLk0tnHw3VtMMgP7b-21" value="" style="shape=partialRectangle;overflow=hidden;connectable=0;fillColor=none;top=0;left=0;bottom=0;right=0;" parent="C-vyLk0tnHw3VtMMgP7b-20" vertex="1">
          <mxGeometry width="30" height="30" as="geometry" />
        </mxCell>
        <mxCell id="C-vyLk0tnHw3VtMMgP7b-22" value="shipment_date date NOT NULL" style="shape=partialRectangle;overflow=hidden;connectable=0;fillColor=none;top=0;left=0;bottom=0;right=0;align=left;spacingLeft=6;" parent="C-vyLk0tnHw3VtMMgP7b-20" vertex="1">
          <mxGeometry x="30" width="220" height="30" as="geometry" />
        </mxCell>
        <mxCell id="C-vyLk0tnHw3VtMMgP7b-23" value="Customers" style="shape=table;startSize=30;container=1;collapsible=1;childLayout=tableLayout;fixedRows=1;rowLines=0;fontStyle=1;align=center;resizeLast=1;" parent="1" vertex="1">
          <mxGeometry x="120" y="120" width="250" height="100" as="geometry" />
        </mxCell>
        <mxCell id="C-vyLk0tnHw3VtMMgP7b-24" value="" style="shape=partialRectangle;collapsible=0;dropTarget=0;pointerEvents=0;fillColor=none;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=1;" parent="C-vyLk0tnHw3VtMMgP7b-23" vertex="1">
          <mxGeometry y="30" width="250" height="30" as="geometry" />
        </mxCell>
        <mxCell id="C-vyLk0tnHw3VtMMgP7b-25" value="PK" style="shape=partialRectangle;overflow=hidden;connectable=0;fillColor=none;top=0;left=0;bottom=0;right=0;fontStyle=1;" parent="C-vyLk0tnHw3VtMMgP7b-24" vertex="1">
          <mxGeometry width="30" height="30" as="geometry" />
        </mxCell>
        <mxCell id="C-vyLk0tnHw3VtMMgP7b-26" value="customer_id int NOT NULL " style="shape=partialRectangle;overflow=hidden;connectable=0;fillColor=none;top=0;left=0;bottom=0;right=0;align=left;spacingLeft=6;fontStyle=5;" parent="C-vyLk0tnHw3VtMMgP7b-24" vertex="1">
          <mxGeometry x="30" width="220" height="30" as="geometry" />
        </mxCell>
        <mxCell id="C-vyLk0tnHw3VtMMgP7b-27" value="" style="shape=partialRectangle;collapsible=0;dropTarget=0;pointerEvents=0;fillColor=none;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" parent="C-vyLk0tnHw3VtMMgP7b-23" vertex="1">
          <mxGeometry y="60" width="250" height="30" as="geometry" />
        </mxCell>
        <mxCell id="C-vyLk0tnHw3VtMMgP7b-28" value="" style="shape=partialRectangle;overflow=hidden;connectable=0;fillColor=none;top=0;left=0;bottom=0;right=0;" parent="C-vyLk0tnHw3VtMMgP7b-27" vertex="1">
          <mxGeometry width="30" height="30" as="geometry" />
        </mxCell>
        <mxCell id="C-vyLk0tnHw3VtMMgP7b-29" value="customer_name char(50) NOT NULL" style="shape=partialRectangle;overflow=hidden;connectable=0;fillColor=none;top=0;left=0;bottom=0;right=0;align=left;spacingLeft=6;" parent="C-vyLk0tnHw3VtMMgP7b-27" vertex="1">
          <mxGeometry x="30" width="220" height="30" as="geometry" />
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
